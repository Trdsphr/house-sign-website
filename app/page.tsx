"use client";


import {useSearchParams} from "next/navigation";


export default function OrderPage(){


const params = useSearchParams();


return (

<div>

<h1>
Order Page Working
</h1>


<p>
Data:
{params.get("data")}
</p>


</div>

)


}
