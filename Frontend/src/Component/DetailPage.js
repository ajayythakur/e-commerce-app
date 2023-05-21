import React from 'react'
import { Link, useLocation, useNavigate} from 'react-router-dom'
import { useCart } from './context/Cart';
import { store } from './API/APIfile';
import { useContext,useState } from 'react';
import { useRecent } from './context/Recent';

const DetailPage = () => {
// eslint-disable-next-line
  const [datas,setData]=useState();
  const [context]=useContext(store)

  const [cart,setCart]=useCart();
  const [recent,setRecent]=useRecent();

  const location = useLocation();
  const data = [location.state];
  console.log(data);

  const category=data[0].catagory;
  console.log(category);

  const navigate=useNavigate();
  return (
    <div>
      {data && data.map((item) => {
        return(
          <div>
            <div  className='prod_box'>
            <div><img alt='404' src={item.image} className='prod_img'></img></div>
            <div className='prod_details'>
            <span>Rating-<img alt='404' src={item.ratting} className='ratingImg prod_rating'></img></span>
            <div>{item.name}</div>
            <div style={{textDecoration:'line-through',opacity:'0.5'}}>Original Price Rs. :- {item.oPrice}</div>
            <div>Discounted Price Rs. :- {item.price}</div>
            <button onClick={()=>{ 
              // setButtonText('ADDED TO CART')
              setCart([...cart,item]); 
              localStorage.setItem('cart',JSON.stringify([...cart,item]));
              // toast.success("Item added to Cart");
              console.log("Item Added to Cart");
            }}>Add to Cart</button><button>Buy Now</button>
            </div>
            </div>


            <div className='about_prod'>
            <span><h2>Product Description</h2></span>
            <div className='prod_descr'>
            <h3>Description</h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie libero eget egestas interdum. Nam in urna et eros interdum euismod. Suspendisse ac elementum arcu. Nullam ut nisl quam. Mauris molestie metus ipsum, vel fermentum nisl dapibus vel. In vitae tellus lacus. Vestibulum fermentum nisl id turpis finibus, sit amet condimentum mi fringilla. Praesent ullamcorper, dui sed posuere rutrum, elit lorem laoreet orci, sit amet finibus nulla odio at nunc. Integer lobortis mauris quis nisl bibendum fringilla. Nullam quam metus, posuere feugiat egestas ac, commodo a enim. Integer vitae vulputate mi. Sed eu diam et libero molestie scelerisque.
            </div>
            <div className='prod_specs'>
            <h3>Specs</h3>
            Sed auctor, magna id hendrerit lobortis, arcu neque porta risus, eget interdum nunc ligula eu enim. Donec placerat augue congue, dictum eros in, rutrum purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed consectetur, ligula eu porta ultrices, nunc ligula rhoncus ante, in sodales ex diam et felis. Integer at elit eu dui blandit hendrerit. Ut et magna quis magna sagittis eleifend et in est. Proin a nisi posuere, bibendum ipsum eget, molestie diam. Aenean posuere sollicitudin nisl at condimentum. Aliquam auctor id ligula quis cursus. Nullam vel ligula et est congue ultricies.
            </div>
            
            <div className='related_prod'>
            <h2>Related Products</h2>
            <div className='related_product'>
              {
                context && context.filter((item)=>item.catagory===category).map((data,index)=>{
                  return(
                    <div className='dataCard'>{data.name}
                    <img alt='404' src={data.image} className='dataImg' ></img>
                    <img alt='404' src={data.ratting} className='ratingImg'></img>
                    <div style={{textDecoration:'line-through',opacity:'0.5'}}> ₹{data.oPrice}</div>
                    <span>₹ {data.price}</span>
                    <button onClick={()=>{ 
                  // setButtonText('ADDED TO CART')
                  setCart([...cart,data]); 
                  localStorage.setItem('cart',JSON.stringify([...cart,data]));
                  // toast.success("Item added to Cart");
                  console.log("Item Added to Cart");
                }}>Add to Cart</button><button>Buy Now</button>
    
                <Link to='/product_details' state={data}>
                <button onClick={()=>{
                setRecent([...recent,data])
                setData(data);
                navigate("/product_details")
                }}>View in Brief</button>
                </Link>
                    </div>                  )
                })
              }
            </div>

            </div>
            </div>

          </div>
        )
      })}
    </div>
  )
}

export default DetailPage