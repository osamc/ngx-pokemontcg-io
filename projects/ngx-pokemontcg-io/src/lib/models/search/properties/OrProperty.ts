import { BaseProperty } from "ngx-pokemontcg-io";

export class OrProperty extends BaseProperty {
   
   properties: BaseProperty[];

    constructor(properties: BaseProperty[], exact: boolean = false, exclude: boolean = false) {
        //it doesn't need a name
        super('', exact, exclude);
        this.properties = properties;
    }
   
    toString(): string {
        let toReturn = '(';
        this.properties.map(p => p.toString()).join(' OR ')
        return toReturn + ')';
    }

}