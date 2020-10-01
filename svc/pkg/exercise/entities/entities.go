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

// TODO: too brute force, refactor
type PropertyValueUnion struct {
	BoolVal    bool
	StrVal     string
	IntVal     int
	IntPairVal struct {
		Higher int
		Lower  int
	}
	MapVal map[string]PropertyValueUnion
}

type FindExercisesConditions struct {
	Or [][]AndCondition
}

type AndCondition struct {
	PropID string

	// TODO: replace with `PropertyValueUnion`?
	PropValUnion struct {
		BoolVal bool
		StrVal  string
		IntVal  int
	}
}
