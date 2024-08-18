import React, { useEffect } from 'react'
import { useDispatchCart,useCart } from './ContextReducer';
export default function Card(props) {

    let dispatch = useDispatchCart();
    let data = useCart();

    let options = props.options;
    let priceOptions = Object.keys(options);

    const priceRef = React.useRef();

    const [qty,setQty] = React.useState(1);
    const[size,setSize] = React.useState("");

    let finalPrice = qty*parseInt(options[size]);
    useEffect(()=>{
        setSize(priceRef.current.value)
    },[]);


    const handleAddToCart=async()=>{
        let food=[];
        for(const item of data){
            if(item.id === props.foodItem._id){
                food = item;
                break;
            }
        }
        if(food.lenght!==0){
            if(food.size === size){
                await dispatch({type:"UPDATE",id:props.foodItem._id,price:finalPrice,qty:qty});
                return;
            }
        }
        await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
        console.log(data);
    }
    

    return (
        <div>
            <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                <img src={props.foodItem.img} className="card-img-top" alt="..." style={{height:"120px",objectFit:"fill"}}/>
                <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>
                </div>
                <div className='container w-100'>
                    <select className='m-2 h-100 btn-success' onChange={(e)=>setQty(e.target.value)}>{Array.from(Array(6), (e, i) => {
                        return (
                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                        )
                    })}</select>
                    <select className='m-2 h-100 btn-success rounded' ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
                        {priceOptions.map((data)=>{
                            return <option key={data} value={data}>{data}</option>
                        })}
                    </select>

                    <div className='d-inline h-100 fs-5'>₹{finalPrice}/-</div>
                    <hr></hr>
                    <button className='btn btn-success justify-center mb-4' onClick={handleAddToCart}>Add To Cart</button>

                </div>
            </div>
        </div>
    )
}
