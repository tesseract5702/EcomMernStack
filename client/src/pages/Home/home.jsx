import React, { useEffect, useState } from 'react'
import NavBar from '../../components/navBar/navBar'
import Spinner from '../../components/spinner'
import Card from '../../components/Cards/card'
import InfiniteScroll from 'react-infinite-scroll-component'
import Alert from '../../components/alert/alert'
import AlertFailed from '../../components/alert/alertDanger'

export default function home(props) {
  const [products,setProducts]=useState([]);
  const [loading,setLoading]=useState(true);
  const [page, setPage] = useState(1);
  const [newProd,setNewProd] = useState(true);
  const [msg,setMessage] = useState("");
  const [showAlert,setShowAlert] = useState(false);
  const [status,setStatus] = useState(404);
  const userName = JSON.parse(localStorage.getItem("user"));

  const getProd = async()=>{
    props.setProgress(10);
    let response = await fetch("http://localhost:3000/",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({status:1})
    })
    props.setProgress(30);
    let result = await response.json();
    props.setProgress(70);
    delete result.status;
    setProducts(result.products);
    setLoading(false);
    props.setProgress(100);
  }

  useEffect(()=>{
    getProd();
  },[])

  const fetchMoreData=async()=>{
    const response = await fetch(`http://localhost:3000/loadmore`,{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({page:page})
    })
    setPage(page+1);
    let result = await response.json();
    console.log(result);
    setProducts(products.concat(result.productArr));
    if(result.productArr.length === 0)
    {
      setNewProd(false);
    }

  }

  function handleAddToCart(id)
  {
    //console.log(event.value)
    return async function handleCartClick()
    {
      console.log(id,"Handle Add to cart")
      const response = await fetch(`http://localhost:3000/addTocart/${id}`,{
        method:"post",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(userName)
      })
      let resp = await response.json();
      setMessage(resp.msg);
      if(resp.status === 200)
      {
        setStatus(200);
        setShowAlert(true);
        setTime();
      }
      else{
        setStatus(404);
        setShowAlert(true);
        setTime();
      }
      window.scrollTo(0,0);
      console.log(resp);
    }
  }

  function setTime()
  {
    setTimeout(()=>{
      setMessage("");
      setShowAlert(false);
    },3000)
  }


  return (
    <>
      <div className='NavBar'>
        <NavBar userName={userName.name}/>
      </div>
      
      {loading && <div style={{paddingTop:"300px",marginBottom:'100px'}}><Spinner/></div>}
      <InfiniteScroll
        dataLength={products?.length}
        next={fetchMoreData}
        hasMore={newProd}
        loader={<Spinner/>}
      > 
      <div className='alert' style={{paddingTop:'80px'}}>
        {showAlert &&((status===200)?<Alert msg={msg}/>:<AlertFailed msg={msg}/>)}
      </div>
      <div className="container" id="prevData" style={{paddingTop:'20px'}}>
          <div className="row row-cols-1 row-cols-md-4 g-5 justify-content-center" id="cards" style={{padding:'7px'}}>
            {products?.map((e)=>{
              return <Card key={e.id} btnone="View Details" btntwo="Add to cart" handleClick={handleAddToCart} name={e.name} id={e.id} price={e.price} company={e.company} detail={e.details} image={e.image}/>
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}
