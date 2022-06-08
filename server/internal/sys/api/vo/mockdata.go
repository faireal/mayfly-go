package vo

import "mayfly-go/pkg/model"

type MockDataListVO struct {
	model.Model
	Service     string `json:"service"`
	Method      string `json:"method"`
	Description string `json:"description"`
	Status      int    `json:"status"`
	Path        string `json:"path"`
}