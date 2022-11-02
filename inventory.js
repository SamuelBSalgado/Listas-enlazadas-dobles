class Inventory{
    constructor(){
        this._first=null;
        this._last=null;
    }

    agregar(nuevo){
        // if(this._first == null){
        //     nuevo = this._first;
        //     this._first.next = null;
        // } else if(this._first.next == null){
        //     nuevo = this._first.next;
        //     this._first.next.next = null;
        // } else{
        //     nuevo = this._first.next.next.next;
        // }

        if (this._first == null){
            this._first = nuevo;
            this._last = nuevo;
        }
        else if(nuevo._code < this._first._code){
            this._first.anterior = nuevo;
            nuevo.next = this._first;
            this._first = nuevo;
        }
        else if(this._last._code < nuevo._code){
            this._last.next = nuevo;
            nuevo.anterior = this._last;
            this._last = nuevo;
        }
        else{
            let temp = this._first;
            while (temp.next != null){
                if(temp._code < nuevo._code && temp.next._code > nuevo._code){
                    temp.next.anterior = nuevo;
                    nuevo.next = temp.next;
                    nuevo.anterior = temp;
                    temp.next = nuevo;
                }
                temp = temp.next;
            }
        }
    }

    buscar(code){
        if(this._first == null){
            return false;
        }
        let temp = this._first;
        while(temp != null){
            if(temp._code == code){
                return "Código: " + temp._code + "." + " Nombre: " + temp._name + "." + " Precio " + temp._price + "." +
                " Cantidad: " + temp._quantity + ".";
            }
            temp = temp.next;
        }
        return null;
    }

    eliminar(code){
        // let aux;
        if(this._first == null){
            return false;
        } else if(this._first._code == code){
            // aux = this._first;
            this._first = this._first.next;
            return;
        }
        let temp = this._first;
        while(temp != null){
            if(temp.next._code == code){
                // temp.next == null;
                // aux = temp.next;
                temp.next = temp.next.next;
                temp.next.anterior = temp;
                return;
            }
            temp = temp.next;
        }
        return false;
    }

    listar(){
        let list="";
        let temp = this._first;
        while(temp != null){
            list += "Código: " + temp._code + "." + " Nombre: " + temp._name + "." + " Costo: " + temp._price + "." +
            " Cantidad: " + temp._quantity + "." + "<br>" + "<br>";
            temp = temp.next;
        }
        return list;
    }

    listarInverso(){
        let backwardsList="";
        let tempList = "";
        let temp = this._first;
        while(temp != null){
            tempList = backwardsList;
            backwardsList = "";
            backwardsList += "Código: " + temp._code + "." + " Nombre: " + temp._name + "." + " Costo: " + temp._price + "."
            + " Cantidad: " + temp._quantity + "." + "<br>" + "<br>" + tempList;
            
            temp = temp.next;
        }
        return backwardsList;
    }
}