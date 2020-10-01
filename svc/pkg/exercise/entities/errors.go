package entities

import "github.com/pkg/errors"

var ErrNotImplemented = errors.New("not implemented")
var ErrEmptyPropertyType = errors.New("empty property type")
var ErrUnsupportedPropertyType = errors.New("unsupported property type")
