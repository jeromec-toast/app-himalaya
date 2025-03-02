export interface IMenuCategory {
    categoryId: number,
    category: string,
    name: string,
    active: boolean
}

export interface IMenuMaster {
    menuId: number
    menuName: number
    orderBy: number
    active: number
    subMenu: number
    category: IMenuCategory[]
}