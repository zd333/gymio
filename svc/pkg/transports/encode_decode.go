package grpc

import (
	"context"
	// exercisev1 "github.com/zd333/gymio/protobuf/gen/go/exercise/v1"
	// "github.com/zd333/gymio/svc/pkg/endpoints"
	// "github.com/zd333/gymio/svc/pkg/entities"
)

type DecodeRequestFunc func(context.Context, interface{}) (request interface{}, err error)

// func decodeCreateExerciseRequest(_ context.Context, grpcReq interface{}) (interface{}, error) {
// 	trReq := grpcReq.(*exercisev1.CreateExerciseRequest)
// 	eReq := endpoints.CreateExerciseRequest{
// 		NameTKey: trReq.NameTKey,
// 	}

// 	// TODO: move to dedicated func
// 	for _, tp := range trReq.Properties {
// 		p := entities.PropertyValue{
// 			Property: entities.Property{
// 				ID: tp.Property.Id,
// 				Data: entities.PropertyData{
// 					NameTKey: tp.Property.NameTKey,
// 				},
// 			},
// 		}

// 		switch tp.Property.Type {
// 		case exercisev1.PropertyType_PROPERTY_TYPE_UNSPECIFIED:
// 			return nil, entities.ErrEmptyPropertyType
// 		case exercisev1.PropertyType_PROPERTY_TYPE_BOOL:
// 			p.Property.Data.Type = entities.PropertyTypeBool
// 			p.Value.BoolVal = tp.Value.GetBoolValue()
// 		case exercisev1.PropertyType_PROPERTY_TYPE_STRING:
// 			p.Property.Data.Type = entities.PropertyTypeString
// 			p.Value.StrVal = tp.Value.GetStringValue()
// 		case exercisev1.PropertyType_PROPERTY_TYPE_INT:
// 			p.Property.Data.Type = entities.PropertyTypeInt
// 			p.Value.IntVal = tp.Value.GetIntValue()
// 		default:
// 			return nil, entities.ErrUnsupportedPropertyType
// 		}

// 		eReq.Props = append(eReq.Props, p)
// 	}

// 	return eReq, nil
// }
