package entities

type Exercise struct {
	Name     string
	PropVals []PropertyValue
}

type PropertyType int

const (
	PropertyTypeBool PropertyType = iota + 1
	PropertyTypeString
	PropertyTypeStringList
	PropertyTypeInt
	PropertyTypeIntPair
	PropertyTypeMap
)

type Property struct {
	Name string
	Type PropertyType
}

type PropertyValue struct {
	Property Property
	Value    PropertyValueUnion
}

type PropertyValueUnion struct {
	BoolVal    bool
	StrVal     string
	IntVal     int32
	StrListVal *[]string
	IntPairVal *IntPair
}

type IntPair struct {
	Higher int32
	Lower  int32
}

type FindExercisesOrCondition struct {
	AndConditions []FindExercisesAndCondition
}

type FindExercisesAndCondition struct {
	PropName          string
	SerializedPropVal string
}
