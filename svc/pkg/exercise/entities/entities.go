package entities

type ExerciseData struct {
	NameTKey string
	Props    []PropertyValue
}

type Exercise struct {
	ID   string
	Data ExerciseData
}

type PropertyData struct {
	NameTKey string
	Type     PropertyType
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
	ID   string
	Data PropertyData
}

type PropertyValue struct {
	Property Property
	Value    PropertyValueUnion
}

// TODO: too brute force, refactor?
type PropertyValueUnion struct {
	BoolVal    bool
	StrVal     string
	StrListVal []string
	IntVal     int32
	IntPairVal IntPair
}

type IntPair struct {
	Higher int32
	Lower  int32
}

type FindExercisesOrCondition struct {
	AndConditions []FindExercisesAndCondition
}

type FindExercisesAndCondition struct {
	PropID            string
	SerializedPropVal string
}
