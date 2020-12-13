package grpc

import (
	"context"

	exercisev1 "github.com/zd333/gymio/protobuf/gen/go/exercise/v1"
	"github.com/zd333/gymio/svc/pkg/exercise/endpoints"
	"github.com/zd333/gymio/svc/pkg/exercise/entities"
)

func decodeCreateExerciseRequest(_ context.Context, grpcReq interface{}) (interface{}, error) {
	trReq := grpcReq.(*exercisev1.CreateExerciseRequest)
	eReq := endpoints.CreateExerciseRequest{
		PropValues: make(map[string]entities.PropertyValueUnion),
	}

	if trReq.Exercise != nil {
		eReq.Name = trReq.Exercise.Name

		for pn, tpv := range trReq.Exercise.PropertyValues {
			eReq.PropValues[pn] = decodePropertyValue(tpv)
		}
	}

	return &eReq, nil
}

func encodeCreateExerciseResponse(_ context.Context, endpointRes interface{}) (interface{}, error) {
	trRes := exercisev1.CreateExerciseResponse{}

	return &trRes, nil
}

func decodeUpdateExerciseRequest(_ context.Context, grpcReq interface{}) (interface{}, error) {
	trReq := grpcReq.(*exercisev1.UpdateExerciseRequest)
	eReq := endpoints.UpdateExerciseRequest{
		Name:       trReq.Name,
		PropValues: make(map[string]entities.PropertyValueUnion),
	}

	for pn, tpv := range trReq.PropertyValues {
		eReq.PropValues[pn] = decodePropertyValue(tpv)
	}

	return &eReq, nil
}

func encodeUpdateExerciseResponse(_ context.Context, endpointRes interface{}) (interface{}, error) {
	trRes := exercisev1.UpdateExerciseResponse{}

	return &trRes, nil
}

func decodeDeleteExerciseRequest(_ context.Context, grpcReq interface{}) (interface{}, error) {
	trReq := grpcReq.(*exercisev1.DeleteExerciseRequest)
	eReq := endpoints.DeleteExerciseRequest{
		Name: trReq.Name,
	}

	return &eReq, nil
}

func encodeDeleteExerciseResponse(_ context.Context, endpointRes interface{}) (interface{}, error) {
	trRes := exercisev1.DeleteExerciseResponse{}

	return &trRes, nil
}

func decodeGetExerciseRequest(_ context.Context, grpcReq interface{}) (interface{}, error) {
	trReq := grpcReq.(*exercisev1.GetExerciseRequest)
	eReq := endpoints.GetExerciseRequest{
		Name: trReq.Name,
	}

	return &eReq, nil
}

func encodeGetExerciseResponse(_ context.Context, endpointRes interface{}) (interface{}, error) {
	eRes := endpointRes.(*endpoints.GetExerciseResponse)
	te := encodeExercise(eRes.Exercise)
	trRes := exercisev1.GetExerciseResponse{
		Exercise: &te,
	}

	return &trRes, nil
}

func decodeCreatePropertyRequest(_ context.Context, grpcReq interface{}) (interface{}, error) {
	trReq := grpcReq.(*exercisev1.CreatePropertyRequest)
	eReq := endpoints.CreatePropertyRequest{}

	if trReq.Property == nil {
		return eReq, nil
	}

	eReq.Property.Name = trReq.Property.Name

	t, err := decodePropertyType(trReq.Property.Type)
	if err != nil {
		return nil, err
	}

	eReq.Property.Type = t

	return &eReq, nil
}

func encodeCreatePropertyResponse(_ context.Context, endpointRes interface{}) (interface{}, error) {
	trRes := exercisev1.CreatePropertyResponse{}

	return &trRes, nil
}

func decodeGetPropertiesRequest(_ context.Context, grpcReq interface{}) (interface{}, error) {
	eReq := endpoints.GetPropertiesRequest{}

	return &eReq, nil
}

func encodeGetPropertiesResponse(_ context.Context, endpointRes interface{}) (interface{}, error) {
	eRes := endpointRes.(*endpoints.GetPropertiesResponse)
	trRes := exercisev1.GetPropertiesResponse{}

	for _, p := range eRes.Props {
		tp := exercisev1.Property{
			Name: p.Name,
			Type: encodePropertyType(p.Type),
		}

		trRes.Properties = append(trRes.Properties, &tp)
	}

	return &trRes, nil
}

func decodeDeletePropertyRequest(_ context.Context, grpcReq interface{}) (interface{}, error) {
	trReq := grpcReq.(*exercisev1.DeletePropertyRequest)
	eReq := endpoints.DeletePropertyRequest{
		Name: trReq.Name,
	}

	return &eReq, nil
}

func encodeDeletePropertyResponse(_ context.Context, endpointRes interface{}) (interface{}, error) {
	trRes := exercisev1.DeletePropertyResponse{}

	return &trRes, nil
}

func decodeFindExercisesByPropertiesRequest(_ context.Context, grpcReq interface{}) (interface{}, error) {
	trReq := grpcReq.(*exercisev1.FindExercisesByPropertiesRequest)
	eReq := endpoints.FindExercisesByPropertiesRequest{}

	for _, tOr := range trReq.OrConditions {
		eOr := entities.FindExercisesOrCondition{}

		for _, tAnd := range tOr.AndConditions {
			eOr.AndConditions = append(eOr.AndConditions, entities.FindExercisesAndCondition{
				PropName:          tAnd.PropertyName,
				SerializedPropVal: tAnd.SerializedPropertyValue,
			})
		}

		eReq.OrConditions = append(eReq.OrConditions, eOr)
	}

	return &eReq, nil
}

func encodeFindExercisesByPropertiesResponse(_ context.Context, endpointRes interface{}) (interface{}, error) {
	eRes := endpointRes.(*endpoints.FindExercisesByPropertiesResponse)
	trRes := exercisev1.FindExercisesByPropertiesResponse{}

	for _, ee := range eRes.Exercises {
		te := encodeExercise(ee)

		trRes.Exercises = append(trRes.Exercises, &te)
	}

	return &trRes, nil
}

func encodeExercise(ee entities.Exercise) exercisev1.Exercise {
	te := exercisev1.Exercise{
		Name: ee.Name,
	}

	for _, pv := range ee.PropVals {
		tpv := encodePropertyValue(pv)
		te.PropertyValues = append(te.PropertyValues, tpv)
	}

	return te
}

func encodePropertyType(endpointType entities.PropertyType) exercisev1.PropertyType {
	switch endpointType {
	case entities.PropertyTypeBool:
		return exercisev1.PropertyType_PROPERTY_TYPE_BOOL
	case entities.PropertyTypeString:
		return exercisev1.PropertyType_PROPERTY_TYPE_STRING
	case entities.PropertyTypeStringList:
		return exercisev1.PropertyType_PROPERTY_TYPE_STRING_LIST
	case entities.PropertyTypeInt:
		return exercisev1.PropertyType_PROPERTY_TYPE_INT
	case entities.PropertyTypeIntPair:
		return exercisev1.PropertyType_PROPERTY_TYPE_INT_PAIR
	default:
		return exercisev1.PropertyType_PROPERTY_TYPE_UNSPECIFIED
	}
}

func decodePropertyType(transportType exercisev1.PropertyType) (entities.PropertyType, error) {
	switch transportType {
	case exercisev1.PropertyType_PROPERTY_TYPE_UNSPECIFIED:
		return -1, entities.ErrEmptyPropertyType
	case exercisev1.PropertyType_PROPERTY_TYPE_BOOL:
		return entities.PropertyTypeBool, nil
	case exercisev1.PropertyType_PROPERTY_TYPE_STRING:
		return entities.PropertyTypeString, nil
	case exercisev1.PropertyType_PROPERTY_TYPE_STRING_LIST:
		return entities.PropertyTypeStringList, nil
	case exercisev1.PropertyType_PROPERTY_TYPE_INT:
		return entities.PropertyTypeInt, nil
	case exercisev1.PropertyType_PROPERTY_TYPE_INT_PAIR:
		return entities.PropertyTypeIntPair, nil
	default:
		return -1, entities.ErrUnsupportedPropertyType
	}
}

func encodePropertyValue(endpointVal entities.PropertyValue) *exercisev1.PropertyValue {
	res := exercisev1.PropertyValue{
		Property: &exercisev1.Property{
			Name: endpointVal.Property.Name,
		},
		Value: &exercisev1.PropertyValueUnion{},
	}

	switch endpointVal.Property.Type {
	case entities.PropertyTypeBool:
		res.Property.Type = exercisev1.PropertyType_PROPERTY_TYPE_BOOL
		res.Value.Either = &exercisev1.PropertyValueUnion_BoolValue{
			BoolValue: endpointVal.Value.BoolVal,
		}
	case entities.PropertyTypeString:
		res.Property.Type = exercisev1.PropertyType_PROPERTY_TYPE_STRING
		res.Value.Either = &exercisev1.PropertyValueUnion_StringValue{
			StringValue: endpointVal.Value.StrVal,
		}
	case entities.PropertyTypeStringList:
		res.Property.Type = exercisev1.PropertyType_PROPERTY_TYPE_STRING_LIST
		res.Value.Either = &exercisev1.PropertyValueUnion_StringListValue{
			StringListValue: &exercisev1.StringListValue{
				Values: *endpointVal.Value.StrListVal,
			},
		}
	case entities.PropertyTypeInt:
		res.Property.Type = exercisev1.PropertyType_PROPERTY_TYPE_INT
		res.Value.Either = &exercisev1.PropertyValueUnion_IntValue{
			IntValue: endpointVal.Value.IntVal,
		}
	case entities.PropertyTypeIntPair:
		res.Property.Type = exercisev1.PropertyType_PROPERTY_TYPE_INT_PAIR
		res.Value.Either = &exercisev1.PropertyValueUnion_IntPairValue{
			IntPairValue: &exercisev1.IntPairValue{
				LowerValue:  endpointVal.Value.IntPairVal.Lower,
				HigherValue: endpointVal.Value.IntPairVal.Higher,
			},
		}
	default:
		res.Property.Type = exercisev1.PropertyType_PROPERTY_TYPE_UNSPECIFIED
	}

	return &res
}

func decodePropertyValue(transportVal *exercisev1.PropertyValueUnion) entities.PropertyValueUnion {
	res := entities.PropertyValueUnion{
		BoolVal: transportVal.GetBoolValue(),
		StrVal:  transportVal.GetStringValue(),
		IntVal:  transportVal.GetIntValue(),
	}

	if sl := transportVal.GetStringListValue(); sl != nil {
		v := sl.GetValues()
		res.StrListVal = &v
	}

	if ip := transportVal.GetIntPairValue(); ip != nil {
		res.IntPairVal = &entities.IntPair{
			Higher: ip.HigherValue,
			Lower:  ip.LowerValue,
		}
	}

	return res
}
