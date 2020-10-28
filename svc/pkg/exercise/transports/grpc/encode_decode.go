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
		NameTKey: trReq.NameTKey,
	}

	for _, tpv := range trReq.PropertyValues {
		pv, err := decodePropertyValue(tpv)
		if err != nil {
			return nil, err
		}

		eReq.PropVals = append(eReq.PropVals, *pv)
	}

	return &eReq, nil
}

func encodeCreateExerciseResponse(_ context.Context, endpointRes interface{}) (interface{}, error) {
	eRes := endpointRes.(*endpoints.CreateExerciseResponse)
	trRes := exercisev1.CreateExerciseResponse{
		Id: eRes.ID,
	}

	return trRes, nil
}

func decodeGetExerciseRequest(_ context.Context, grpcReq interface{}) (interface{}, error) {
	trReq := grpcReq.(*exercisev1.GetExerciseRequest)
	eReq := endpoints.GetExerciseRequest{
		ID: trReq.Id,
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

func decodeUpdateExerciseRequest(_ context.Context, grpcReq interface{}) (interface{}, error) {
	trReq := grpcReq.(*exercisev1.UpdateExerciseRequest)
	eReq := endpoints.UpdateExerciseRequest{
		NameTKey: trReq.NameTKey,
	}

	for _, tpv := range trReq.PropertyValues {
		pv, err := decodePropertyValue(tpv)
		if err != nil {
			return nil, err
		}

		eReq.PropVals = append(eReq.PropVals, *pv)
	}

	return &eReq, nil
}

func encodeUpdateExerciseResponse(_ context.Context, endpointRes interface{}) (interface{}, error) {
	trRes := exercisev1.UpdateExerciseResponse{}

	return trRes, nil
}

func decodeDeleteExerciseRequest(_ context.Context, grpcReq interface{}) (interface{}, error) {
	trReq := grpcReq.(*exercisev1.DeleteExerciseRequest)
	eReq := endpoints.DeleteExerciseRequest{
		ID: trReq.Id,
	}

	return &eReq, nil
}

func encodeDeleteExerciseResponse(_ context.Context, endpointRes interface{}) (interface{}, error) {
	trRes := exercisev1.DeleteExerciseResponse{}

	return trRes, nil
}

func decodeCreatePropertyRequest(_ context.Context, grpcReq interface{}) (interface{}, error) {
	trReq := grpcReq.(*exercisev1.CreatePropertyRequest)
	eReq := endpoints.CreatePropertyRequest{
		NameTKey: trReq.NameTKey,
	}

	t, err := decodePropertyType(trReq.Type)
	if err != nil {
		return nil, err
	}

	eReq.Type = t

	return &eReq, nil
}

func encodeCreatePropertyResponse(_ context.Context, endpointRes interface{}) (interface{}, error) {
	eRes := endpointRes.(*endpoints.CreatePropertyResponse)
	trRes := exercisev1.CreatePropertyResponse{
		Id: eRes.ID,
	}

	return trRes, nil
}

func decodeGetPropertiesRequest(_ context.Context, grpcReq interface{}) (interface{}, error) {
	eReq := endpoints.GetPropertiesRequest{}

	return &eReq, nil
}

func encodeGetPropertiesResponse(_ context.Context, endpointRes interface{}) (interface{}, error) {
	eRes := endpointRes.(*endpoints.GetPropertiesResponse)
	trRes := exercisev1.GetPropertiesResponse{}

	for _, p := range eRes.Props {
		tp := exercisev1.ExerciseProperty{
			Id:       p.ID,
			NameTKey: p.Data.NameTKey,
			Type:     encodePropertyType(p.Data.Type),
		}

		trRes.Properties = append(trRes.Properties, &tp)
	}

	return trRes, nil
}

func decodeUpdatePropertyRequest(_ context.Context, grpcReq interface{}) (interface{}, error) {
	trReq := grpcReq.(*exercisev1.UpdatePropertyRequest)
	eReq := endpoints.UpdatePropertyRequest{
		NameTKey: trReq.NameTKey,
	}

	return &eReq, nil
}

func encodeUpdatePropertyResponse(_ context.Context, endpointRes interface{}) (interface{}, error) {
	trRes := exercisev1.UpdatePropertyResponse{}

	return trRes, nil
}

func decodeDeletePropertyRequest(_ context.Context, grpcReq interface{}) (interface{}, error) {
	trReq := grpcReq.(*exercisev1.DeletePropertyRequest)
	eReq := endpoints.DeletePropertyRequest{
		ID: trReq.Id,
	}

	return &eReq, nil
}

func encodeDeletePropertyResponse(_ context.Context, endpointRes interface{}) (interface{}, error) {
	trRes := exercisev1.DeletePropertyResponse{}

	return trRes, nil
}

func decodeFindExercisesByPropertiesRequest(_ context.Context, grpcReq interface{}) (interface{}, error) {
	trReq := grpcReq.(*exercisev1.FindExercisesByPropertiesRequest)
	eReq := endpoints.FindExercisesByPropertiesRequest{}

	for _, tOr := range trReq.OrConditions {
		eOr := entities.FindExercisesOrCondition{}

		for _, tAnd := range tOr.AndConditions {
			eOr.AndConditions = append(eOr.AndConditions, entities.FindExercisesAndCondition{
				PropID:            tAnd.PropertyId,
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

	return trRes, nil
}

func encodeExercise(ee entities.Exercise) exercisev1.Exercise {
	te := exercisev1.Exercise{
		Id:       ee.ID,
		NameTKey: ee.Data.NameTKey,
	}

	for _, pv := range ee.Data.Props {
		tpv := encodePropertyValue(pv)
		te.PropertyValues = append(te.PropertyValues, &tpv)
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

func encodePropertyValue(endpointVal entities.PropertyValue) exercisev1.ExercisePropertyValue {
	res := exercisev1.ExercisePropertyValue{
		Property: &exercisev1.ExerciseProperty{
			Id:       endpointVal.Property.ID,
			NameTKey: endpointVal.Property.Data.NameTKey,
		},
	}

	switch endpointVal.Property.Data.Type {
	case entities.PropertyTypeBool:
		res.Property.Type = exercisev1.PropertyType_PROPERTY_TYPE_BOOL
		res.Value.Either = &exercisev1.ExercisePropertyValueUnion_BoolValue{endpointVal.Value.BoolVal}
	case entities.PropertyTypeString:
		res.Property.Type = exercisev1.PropertyType_PROPERTY_TYPE_STRING
		res.Value.Either = &exercisev1.ExercisePropertyValueUnion_StringValue{endpointVal.Value.StrVal}
	case entities.PropertyTypeStringList:
		res.Property.Type = exercisev1.PropertyType_PROPERTY_TYPE_STRING_LIST
		res.Value.Either = &exercisev1.ExercisePropertyValueUnion_StringListValue{&exercisev1.StringListExercisePropertyValue{
			Values: endpointVal.Value.StrListVal,
		}}
	case entities.PropertyTypeInt:
		res.Property.Type = exercisev1.PropertyType_PROPERTY_TYPE_INT
		res.Value.Either = &exercisev1.ExercisePropertyValueUnion_IntValue{endpointVal.Value.IntVal}
	case entities.PropertyTypeIntPair:
		res.Property.Type = exercisev1.PropertyType_PROPERTY_TYPE_INT_PAIR
		res.Value.Either = &exercisev1.ExercisePropertyValueUnion_IntPairValue{&exercisev1.IntPairExercisePropertyValue{
			LoverValue:  endpointVal.Value.IntPairVal.Lower,
			HigherValue: endpointVal.Value.IntPairVal.Higher,
		}}
	default:
		res.Property.Type = exercisev1.PropertyType_PROPERTY_TYPE_UNSPECIFIED
	}

	return res
}

func decodePropertyValue(transportVal *exercisev1.ExercisePropertyValue) (*entities.PropertyValue, error) {
	res := entities.PropertyValue{
		Property: entities.Property{
			ID: transportVal.Property.Id,
			Data: entities.PropertyData{
				NameTKey: transportVal.Property.NameTKey,
			},
		},
	}

	switch transportVal.Property.Type {
	case exercisev1.PropertyType_PROPERTY_TYPE_UNSPECIFIED:
		return nil, entities.ErrEmptyPropertyType
	case exercisev1.PropertyType_PROPERTY_TYPE_BOOL:
		res.Property.Data.Type = entities.PropertyTypeBool
		res.Value.BoolVal = transportVal.Value.GetBoolValue()
	case exercisev1.PropertyType_PROPERTY_TYPE_STRING:
		res.Property.Data.Type = entities.PropertyTypeString
		res.Value.StrVal = transportVal.Value.GetStringValue()
	case exercisev1.PropertyType_PROPERTY_TYPE_STRING_LIST:
		res.Property.Data.Type = entities.PropertyTypeStringList
		if l := transportVal.Value.GetStringListValue(); l != nil {
			res.Value.StrListVal = l.GetValues()
		}
	case exercisev1.PropertyType_PROPERTY_TYPE_INT:
		res.Property.Data.Type = entities.PropertyTypeInt
		res.Value.IntVal = transportVal.Value.GetIntValue()
	case exercisev1.PropertyType_PROPERTY_TYPE_INT_PAIR:
		res.Property.Data.Type = entities.PropertyTypeIntPair
		if v := transportVal.Value.GetIntPairValue(); v != nil {
			res.Value.IntPairVal = entities.IntPair{
				Higher: v.HigherValue,
				Lower:  v.LoverValue,
			}
		}
	default:
		return nil, entities.ErrUnsupportedPropertyType
	}

	return &res, nil
}
