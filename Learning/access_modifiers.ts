class Car{
    public brand:string;
    private speed:number;
    protected fuel:string;
    constructor(brand:string,speed:number,fuel:string){
        this.brand=brand;
        this.speed=speed;
        this.fuel=fuel;
    }
    //public method(default)
    public accelerate(){
        this.speed+=10;
        console.log(`Accelerating to ${this.speed}km/h`);
    }
    //private method
    private refuel(){
        console.log(`Refueling with ${this.fuel}`);
    }
    //protected method
    protected honk(){
        console.log("Honk,honk!");
    }
    public displayCarinfo(){
        console.log(`Brand:${this.brand}`);
        console.log(`Speed:${this.speed}`);
        console.log(`Fuel:${this.fuel}`);
        this.refuel();
        this.honk();
    }
}
let myCar=new Car("Toyota",60,"Gasoline");
console.log(`Brand:${myCar.brand}`);
myCar.accelerate();
//myCar.refuel();
//mycar.honk();
myCar.displayCarinfo();