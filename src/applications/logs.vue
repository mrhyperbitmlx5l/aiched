<template>
	<a-card>
		<a-form layout="inline" class="ant-advanced-search-form" :form="searchForm">
			<a-form-item label="时间范围" :validate-status="validateStatus" :help="validateMsg">
				<a-date-picker
					:disabledDate="disabledStartDate"
					:format="dateFormat"
					v-model="searchForm.startDate"
					placeholder="选择查询开始时间"
					style="margin-right:10px"
					@change="dateChange"
				/>
				<a-date-picker :disabledDate="disabledEndDate" :format="dateFormat" v-model="searchForm.endDate" placeholder="选择查询结束时间" @change="dateChange" />
			</a-form-item>
			<a-form-item label="查询类型">
				<a-select defaultValue="" style="width: 120px" @change="handleChange" v-model="searchForm.type">
					<a-select-option value="">全部日志</a-select-option>
					<a-select-option value="1001">登录日志</a-select-option>
					<a-select-option value="1002">登出日志</a-select-option>
					<a-select-option value="1003">上传日志</a-select-option>
					<a-select-option value="1004">下载日志</a-select-option>
					<a-select-option value="1005">上传审核</a-select-option>
					<a-select-option value="1006">下载审核</a-select-option>
				</a-select>
			</a-form-item>
			<a-form-item label="查询手机号"><a-input placeholder="请输入操作人手机号" v-model="searchForm.mobile" style="width: 90%" /></a-form-item>
			<a-form-item><a-button type="primary" @click="search">查询</a-button></a-form-item>
		</a-form>
		<a-table :columns="columns" :dataSource="list" :loading="loading" rowKey="id" size="middle" bordered :pagination="pagination" @change="handleTableChange">
			<template slot="status" slot-scope="text, record">
				<a-tag :color="record.status > 0 ? 'green' : 'red'">{{ getStatus(record.status) }}</a-tag>
			</template>
		</a-table>
	</a-card>
</template>
<script>
import moment from 'moment';
import { EVENT, STATUS } from '@/api/types';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
const columns = [
	{
		title: 'ID',
		dataIndex: 'id'
	},
	{
		title: '事件类型',
		dataIndex: 'event',
		customRender: (text, row) => {
			return EVENT[row.event];
		}
	},
	{
		title: '内容',
		dataIndex: 'context'
	},
	{
		title: '操作人',
		dataIndex: 'name'
	},
	{
		title: '日期',
		dataIndex: 'createDate'
	},
	{
		title: '事件状态',
		dataIndex: 'status',
		scopedSlots: {
			customRender: 'status'
		}
	}
];
export default {
	data() {
		return {
			columns,
			searchForm: {
				startDate: moment(this.$store.state.session.date, this.dateFormat).subtract(30, 'days'),
				endDate: moment(this.$store.state.session.date, this.dateFormat),
				type: '',
				mobile: ''
			},
			validateStatus: '',
			validateMsg: ''
		};
	},
	computed: {
		dateFormat() {
			return this.$store.state.manager.dateFormat;
		},
		list() {
			return this.$store.state.logs.list;
		},
		loading() {
			return this.$store.state.logs.loading;
		},
		pagination() {
			return this.$store.state.logs.pagination;
		}
	},
	methods: {
		getStatus(value) {
			return STATUS[value];
		},
		moment,
		disabledStartDate(startValue) {
			const endValue = this.searchForm.endDate;
			if (!startValue || !endValue) {
				return false;
			}
			return startValue.valueOf() > endValue.valueOf() || endValue.diff(startValue, 'days') > this.$store.state.app.dateRange;
		},
		disabledEndDate(endValue) {
			const startValue = this.searchForm.startDate;
			if (!endValue || !startValue) {
				return false;
			}
			return startValue.valueOf() > endValue.valueOf() || endValue.diff(startValue, 'days') > this.$store.state.app.dateRange;
		},
		handleTableChange(paginationData) {
			this.$store.commit('logs/setPagination', paginationData);
			this.$store.dispatch('logs/list', this.searchForm);
		},
		// 时间面板改变回调
		dateChange() {
			if (this.searchForm.startDate === null || this.searchForm.endDate === null) {
				this.validateStatus = 'error';
				this.validateMsg = '查询的时间范围是必选项';
			} else {
				this.validateStatus = '';
				this.validateMsg = '';
			}
		},
		handleChange(value) {
			console.log('selected' + value);
		},
		search() {
			//console.log('====>' + this.searchForm.startDate +(this.searchForm.startDate===null))
			if (this.searchForm.startDate != null && this.searchForm.endDate != null) {
				//console.log(JSON.stringify(this.searchForm));
				this.$store.dispatch('logs/list', this.searchForm);
			} else {
				this.$message.error('请选择查询时间范围，并且开始时间、结束时间在45天之内。', 2);
			}
		}
	}
};
</script>
