// ==========================================================================
// This is auto-generated by gf cli tool. DO NOT EDIT THIS FILE MANUALLY.
// ==========================================================================

package internal

import (
	"github.com/gogf/gf/os/gtime"
)

// SysDictType is the golang structure for table sys_dict_type.
type SysDictType struct {
	DictId    uint64      `orm:"dict_id,primary"  json:"dictId"`    // 字典主键
	DictName  string      `orm:"dict_name"        json:"dictName"`  // 字典名称
	DictType  string      `orm:"dict_type,unique" json:"dictType"`  // 字典类型
	Status    uint        `orm:"status"           json:"status"`    // 状态（0正常 1停用）
	CreateBy  uint        `orm:"create_by"        json:"createBy"`  // 创建者
	UpdateBy  uint        `orm:"update_by"        json:"updateBy"`  // 更新者
	Remark    string      `orm:"remark"           json:"remark"`    // 备注
	CreatedAt *gtime.Time `orm:"created_at"       json:"createdAt"` // 创建日期
	UpdatedAt *gtime.Time `orm:"updated_at"       json:"updatedAt"` // 修改日期
	DeletedAt *gtime.Time `orm:"deleted_at"       json:"deletedAt"` // 删除日期
}
