
#  数据库设计文档 
**数据库名：** venus

**文档版本：** 1.0.0

**文档描述：** 数据库设计文档生成
| 表名                  | 说明       |
| :-------------------- | :--------- |
| [tb_md_account](#tb_md_account) | 账户表 |
| [tb_md_account_subjects](#tb_md_account_subjects) | 会计科目 |
| [tb_md_address_book](#tb_md_address_book) | 通讯录，供应商客户 |
| [tb_md_unit](#tb_md_unit) | 计量单位 |
| [tb_md_unit_convert](#tb_md_unit_convert) |  |
| [tb_sys_config](#tb_sys_config) | 系统字典 |
| [tb_sys_image](#tb_sys_image) | 图片和PDF数据表 |
| [tb_sys_keyring](#tb_sys_keyring) |  |
| [tb_sys_log](#tb_sys_log) | 日志表 |
| [tb_sys_personnel](#tb_sys_personnel) |  |
| [tb_sys_sequence](#tb_sys_sequence) |  |
**表名：** <a id="tb_md_account">tb_md_account</a>

**说明：** 账户表

**数据列：**

| 序号 | 名称 | 数据类型 |  长度  | 小数位 | 允许空值 | 主键 | 默认值 | 说明 |
| :--: | :--- | :------: | :----: | :----: | :------: | :--: | :----: | :--: |
| 1 | ID | varchar | 32 | 0 | N| Y |  | 主键 |
| 2 | NAME | varchar | 64 | 0 | N| N |  | 名称 |
| 3 | VIRTUAL_NUMBER | varchar | 64 | 0 | N| N |  | 虚拟账户号 |
| 4 | ACCOUNT_NUMBER | varchar | 32 | 0 | Y| N |  | 实体账户号 |
| 5 | TYPE | int | 10 | 0 | N| N | 0 | 类型 |
| 6 | AMOUNT | decimal | 24 | 6 | N| N | 0.000000 | 金额 |
| 7 | REMARK | varchar | 64 | 0 | Y| N |  | 备注 |
| 8 | IS_DEFAULT | int | 10 | 0 | Y| N | 0 | 是否默认 |
| 9 | STATUS | decimal | 2 | 0 | N| N | 0 | 状态1正常-1删除0异常 |
| 10 | CREATE_DATE | timestamp | 19 | 0 | N| N | CURRENT_TIMESTAMP | 创建时间 |
| 11 | MODIFY_DATE | timestamp | 19 | 0 | N| N | 0000-00-0000:00:00 | 修改时间 |
| 12 | VERSION | int | 10 | 0 | Y| N | 0 | 乐观锁版本号 |
**表名：** <a id="tb_md_account_subjects">tb_md_account_subjects</a>

**说明：** 会计科目

**数据列：**

| 序号 | 名称 | 数据类型 |  长度  | 小数位 | 允许空值 | 主键 | 默认值 | 说明 |
| :--: | :--- | :------: | :----: | :----: | :------: | :--: | :----: | :--: |
| 1 | ID | varchar | 32 | 0 | N| Y |  | 主键 |
| 2 | CODE | varchar | 16 | 0 | N| N |  | 会计科目编码 |
| 3 | TYPE | int | 10 | 0 | Y| N |  | 类型 |
| 4 | NAME | varchar | 64 | 0 | Y| N |  | 名称 |
| 5 | ACCONUT_ID | varchar | 32 | 0 | Y| N |  |  |
| 6 | DEBIT | int | 10 | 0 | N| N | 0 | 借or贷 |
| 7 | CREDIT | int | 10 | 0 | N| N | 0 | 贷 |
| 8 | STATUS | decimal | 2 | 0 | Y| N |  | 状态1正常-1删除0异常 |
| 9 | CREATE_DATE | timestamp | 19 | 0 | N| N | CURRENT_TIMESTAMP | 创建时间 |
| 10 | MODIFY_DATE | timestamp | 19 | 0 | N| N | 0000-00-0000:00:00 | 修改时间 |
**表名：** <a id="tb_md_address_book">tb_md_address_book</a>

**说明：** 通讯录，供应商客户

**数据列：**

| 序号 | 名称 | 数据类型 |  长度  | 小数位 | 允许空值 | 主键 | 默认值 | 说明 |
| :--: | :--- | :------: | :----: | :----: | :------: | :--: | :----: | :--: |
| 1 | ID | varchar | 32 | 0 | N| Y |  | 主键 |
| 2 | TYPE | int | 10 | 0 | Y| N |  | 类型 |
| 3 | NAME | varchar | 64 | 0 | Y| N |  | 名称 |
| 4 | MOBILE | varchar | 36 | 0 | Y| N |  | 手机号 |
| 5 | TELEPHONE | varchar | 32 | 0 | Y| N |  | 电话 |
| 6 | EMAIL | varchar | 256 | 0 | Y| N |  |  |
| 7 | ADDRESS | varchar | 256 | 0 | Y| N |  | 地址 |
| 8 | WEICHAT | varchar | 128 | 0 | Y| N |  |  |
| 9 | ALIPAY | varchar | 128 | 0 | Y| N |  |  |
| 10 | BANK | varchar | 64 | 0 | Y| N |  | 开户行 |
| 11 | TAXPAYER_ID_CODE | varchar | 32 | 0 | Y| N |  | 纳税人识别码。税号 |
| 12 | ACCOUNT_ID | varchar | 32 | 0 | Y| N |  | 账户 |
| 13 | STATUS | decimal | 2 | 0 | N| N | 0 | 状态1正常-1删除0异常 |
| 14 | MODIFY_DATE | timestamp | 19 | 0 | N| N | CURRENT_TIMESTAMP | 修改时间 |
| 15 | CREATE_DATE | timestamp | 19 | 0 | N| N | 0000-00-0000:00:00 | 创建时间 |
**表名：** <a id="tb_md_unit">tb_md_unit</a>

**说明：** 计量单位

**数据列：**

| 序号 | 名称 | 数据类型 |  长度  | 小数位 | 允许空值 | 主键 | 默认值 | 说明 |
| :--: | :--- | :------: | :----: | :----: | :------: | :--: | :----: | :--: |
| 1 | ID | varchar | 32 | 0 | N| Y |  | 主键 |
| 2 | NAME | varchar | 64 | 0 | N| N |  | 名称 |
| 3 | CREATE_DATE | timestamp | 19 | 0 | N| N | CURRENT_TIMESTAMP | 创建时间 |
| 4 | MODIFY_DATE | timestamp | 19 | 0 | N| N | 0000-00-0000:00:00 | 修改时间 |
| 5 | STATUS | decimal | 2 | 0 | N| N |  | 状态1正常-1删除0异常 |
**表名：** <a id="tb_md_unit_convert">tb_md_unit_convert</a>

**说明：** 

**数据列：**

| 序号 | 名称 | 数据类型 |  长度  | 小数位 | 允许空值 | 主键 | 默认值 | 说明 |
| :--: | :--- | :------: | :----: | :----: | :------: | :--: | :----: | :--: |
| 1 | ID | varchar | 32 | 0 | N| Y |  | 主键 |
| 2 | FROM_UNIT_ID | varchar | 32 | 0 | N| N |  |  |
| 3 | NUMBER | double | 22 | 0 | N| N |  |  |
| 4 | TO_UNIT_ID | varchar | 32 | 0 | N| N |  |  |
**表名：** <a id="tb_sys_config">tb_sys_config</a>

**说明：** 系统字典

**数据列：**

| 序号 | 名称 | 数据类型 |  长度  | 小数位 | 允许空值 | 主键 | 默认值 | 说明 |
| :--: | :--- | :------: | :----: | :----: | :------: | :--: | :----: | :--: |
| 1 | ID | varchar | 32 | 0 | N| Y |  | 主键 |
| 2 | TYPE | varchar | 32 | 0 | N| N |  | 类型 |
| 3 | NAME | varchar | 64 | 0 | Y| N |  | 名称 |
| 4 | DATA_KEY | varchar | 64 | 0 | N| N |  | key |
| 5 | DATA_VALUE | varchar | 256 | 0 | Y| N |  | 值 |
| 6 | RELATED_ID | varchar | 32 | 0 | Y| N |  |  |
| 7 | CREATE_DATE | timestamp | 19 | 0 | N| N | CURRENT_TIMESTAMP | 创建时间 |
| 8 | MODIFY_DATE | timestamp | 19 | 0 | N| N | 0000-00-0000:00:00 | 修改时间 |
**表名：** <a id="tb_sys_image">tb_sys_image</a>

**说明：** 图片和PDF数据表

**数据列：**

| 序号 | 名称 | 数据类型 |  长度  | 小数位 | 允许空值 | 主键 | 默认值 | 说明 |
| :--: | :--- | :------: | :----: | :----: | :------: | :--: | :----: | :--: |
| 1 | ID | varchar | 32 | 0 | N| Y |  | 主键 |
| 2 | TYPE | int | 10 | 0 | Y| N |  | 类型 |
| 3 | PATH | varchar | 64 | 0 | N| N |  |  |
| 4 | WIDTH | int | 10 | 0 | N| N | 0 |  |
| 5 | HEIGHT | int | 10 | 0 | N| N | 0 |  |
| 6 | DATA | longblob | 2147483647 | 0 | Y| N |  |  |
| 7 | SORT | int | 10 | 0 | N| N | 0 |  |
| 8 | CREATE_DATE | timestamp | 19 | 0 | N| N | CURRENT_TIMESTAMP | 创建时间 |
| 9 | MODIFY_DATE | timestamp | 19 | 0 | N| N | 0000-00-0000:00:00 | 修改时间 |
| 10 | STATUS | decimal | 2 | 0 | N| N |  | 状态1正常-1删除0异常 |
**表名：** <a id="tb_sys_keyring">tb_sys_keyring</a>

**说明：** 

**数据列：**

| 序号 | 名称 | 数据类型 |  长度  | 小数位 | 允许空值 | 主键 | 默认值 | 说明 |
| :--: | :--- | :------: | :----: | :----: | :------: | :--: | :----: | :--: |
| 1 | ID | varchar | 32 | 0 | N| Y |  | 主键 |
| 2 | RELATED_ID | varchar | 32 | 0 | N| N |  |  |
| 3 | COUNT | int | 10 | 0 | N| N | 0 |  |
| 4 | SESAME | varchar | 64 | 0 | Y| N |  |  |
| 5 | CREATE_DATE | timestamp | 19 | 0 | N| N | CURRENT_TIMESTAMP | 创建时间 |
| 6 | MODIFY_DATE | timestamp | 19 | 0 | N| N | CURRENT_TIMESTAMP | 修改时间 |
| 7 | STATUS | int | 10 | 0 | Y| N | 0 |  |
**表名：** <a id="tb_sys_log">tb_sys_log</a>

**说明：** 日志表

**数据列：**

| 序号 | 名称 | 数据类型 |  长度  | 小数位 | 允许空值 | 主键 | 默认值 | 说明 |
| :--: | :--- | :------: | :----: | :----: | :------: | :--: | :----: | :--: |
| 1 | ID | varchar | 32 | 0 | N| Y |  | 主键 |
| 2 | OPS_ID | varchar | 32 | 0 | N| N |  | 用户id申请人 |
| 3 | EVENT | varchar | 64 | 0 | N| N |  | 事件类型 |
| 4 | RELATED_ID | varchar | 32 | 0 | Y| N |  | 关联数据id |
| 5 | CONTEXT | varchar | 512 | 0 | N| N |  | 可放一些数据，申请原因，驳回原因等 |
| 6 | STATUS | decimal | 2 | 0 | Y| N |  | 状态1正常-1删除0异常 |
| 7 | CREATE_DATE | timestamp | 19 | 0 | N| N | CURRENT_TIMESTAMP | 创建时间 |
| 8 | MODIFY_DATE | timestamp | 19 | 0 | N| N | 0000-00-0000:00:00 | 修改时间 |
**表名：** <a id="tb_sys_personnel">tb_sys_personnel</a>

**说明：** 

**数据列：**

| 序号 | 名称 | 数据类型 |  长度  | 小数位 | 允许空值 | 主键 | 默认值 | 说明 |
| :--: | :--- | :------: | :----: | :----: | :------: | :--: | :----: | :--: |
| 1 | ID | varchar | 32 | 0 | N| Y |  | 主键 |
| 2 | LOGIN_NAME | varchar | 128 | 0 | N| N |  |  |
| 3 | NAME | varchar | 128 | 0 | Y| N |  | 仓库名称 |
| 4 | NICK | varchar | 64 | 0 | Y| N |  | 昵称 |
| 5 | EMAIL | varchar | 256 | 0 | N| N |  |  |
| 6 | MOBILE | varchar | 36 | 0 | N| N |  | 手机号 |
| 7 | AVATAR | varchar | 128 | 0 | Y| N |  |  |
| 8 | role_id | varchar | 32 | 0 | N| N |  |  |
| 9 | CREATE_DATE | timestamp | 19 | 0 | N| N | CURRENT_TIMESTAMP | 创建时间 |
| 10 | MODIFY_DATE | timestamp | 19 | 0 | N| N | CURRENT_TIMESTAMP | 修改时间 |
| 11 | STATUS | int | 10 | 0 | N| N | 0 |  |
**表名：** <a id="tb_sys_sequence">tb_sys_sequence</a>

**说明：** 

**数据列：**

| 序号 | 名称 | 数据类型 |  长度  | 小数位 | 允许空值 | 主键 | 默认值 | 说明 |
| :--: | :--- | :------: | :----: | :----: | :------: | :--: | :----: | :--: |
| 1 | ID | varchar | 32 | 0 | N| Y |  | 主键 |
| 2 | NAME | varchar | 64 | 0 | N| N |  | 名称 |
| 3 | MIN_VALUE | bigint | 19 | 0 | N| N | 0 |  |
| 4 | MAX_VALUE | bigint | 19 | 0 | N| N | 999999 |  |
| 5 | CURRENT_VALUE | int | 10 | 0 | N| N | 0 | 合计金额 |
| 6 | INCREMENT_VALUE | int | 10 | 0 | N| N | 1 |  |
| 7 | REMARK | varchar | 64 | 0 | Y| N |  | 备注 |
| 8 | STATUS | decimal | 2 | 0 | Y| N |  | 状态1正常-1删除0异常 |
| 9 | VERSION | int | 10 | 0 | N| N | 0 | 乐观锁版本号 |
