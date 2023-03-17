export enum GenderValue {
    Man = 0,
    Woman = 1,
    Unisex = 2
}

export enum GenderName {
    Man = "Мужской",
    Woman = "Женский",
    Unisex = "Унисекс"
}

type GenderArrayType = {name: GenderName, value: GenderValue}

class Gender {
    static readonly ManValue: number = GenderValue.Man;
    static readonly WomanValue: number = GenderValue.Woman;
    static readonly UnisexValue: number = GenderValue.Unisex;

    static readonly  ManName: string = GenderName.Man;
    static readonly WomanName: string = GenderName.Woman;
    static readonly UnisexName: string = GenderName.Unisex;

    static readonly Array: GenderArrayType[] = [
        {name: GenderName.Man, value: GenderValue.Man},
        {name: GenderName.Woman, value: GenderValue.Woman},
        {name: GenderName.Unisex, value: GenderValue.Unisex}
    ]
}

export default Gender;