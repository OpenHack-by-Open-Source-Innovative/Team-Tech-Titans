import { EntityNode } from "./node.js"

export class Parser{
    
    public static parseJsontoEntityTree(json:any){

        const root = new EntityNode();
        root.key = null;
        root.value = json;
        root.dataType = "root";
        Object.keys(json).forEach(function(key){
            const child = new EntityNode();
            child.key = key;
            child.value = json[key];
            child.dataType = typeof json[key];
            
            


            root.children.push(child);
        })
    }
}