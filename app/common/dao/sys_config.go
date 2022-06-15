// =================================================================================
// This is auto-generated by GoFrame CLI tool only once. Fill this file as you wish.
// =================================================================================

package dao

import (
	"gfast/app/common/dao/internal"
)

// sysConfigDao is the manager for logic model data accessing and custom defined data operations functions management.
// You can define custom methods on it to extend its functionality as you wish.
type sysConfigDao struct {
	*internal.SysConfigDao
}

var (
	// SysConfig is globally public accessible object for table sys_config operations.
	SysConfig sysConfigDao
)

func init() {
	SysConfig = sysConfigDao{
		internal.NewSysConfigDao(),
	}
}