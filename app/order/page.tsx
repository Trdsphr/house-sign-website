"use client";


import {useSearchParams} from "next/navigation";


export default function Order(){


const params =
useSearchParams();


const data =
params.get("data");



let order:any=null;



if(data){

order =
JSON.parse(
Buffer.from(data,"base64").toString()
);

}



return (

<main>


<h1>
Order Summary
</h1>



{
order &&

<>

<p>
Name: {order.customerName}
</p>


<p>
Email: {order.email}
</p>


<p>
Total: £{order.total}
</p>


<h2>
Products
</h2>


{
order.items.map(
(item:any)=>(

<div key={item.id}>

{item.modelName}

<br/>

{item.houseNumber}
{" "}
{item.streetName}


</div>

)

)

}


<button>

Pay Now

</button>


</>

}



</main>

)


}
