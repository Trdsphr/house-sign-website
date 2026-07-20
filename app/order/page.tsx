"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function OrderPage() {


    const searchParams = useSearchParams();

    const [order,setOrder] = useState<any>(null);



    useEffect(()=>{


        const data =
        searchParams.get("data");


        if(data){


            const decoded =
            JSON.parse(
                atob(data)
            );


            setOrder(decoded);

        }


    },[searchParams]);





    if(!order){

        return (
            <div>
                Loading order...
            </div>
        )

    }





    return (

        <main>


            <h1>
                Order Summary
            </h1>



            <p>
                Name: {order.customerName}
            </p>


            <p>
                Email: {order.email}
            </p>


            <p>
                Phone: {order.phone}
            </p>


            <p>
                Address: {order.address}
            </p>



            <h2>
                Products
            </h2>



            {
                order.items.map(
                    (item:any,index:number)=>(

                    <div key={index}>

                        <p>
                        {item.modelName}
                        </p>

                        <p>
                        {item.houseNumber}
                        {" "}
                        {item.streetName}
                        </p>

                        <p>
                        {item.colour}
                        </p>

                    </div>

                ))

            }



            <h2>
                Total: £{order.total}
            </h2>



            <button>

                Pay Now

            </button>



        </main>

    )

}
