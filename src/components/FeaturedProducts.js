import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {getProducts} from '../redux/actions/productActions';
import Product from './Product';
import Loading from '../components/Loading';

const FeaturedProducts = () => {

	const products = useSelector((state)=> state.allProducts.products);
	const uniqueProducts = products.filter((product, index, self) => 
    index === self.findIndex(p => (
        p._id === product._id
    ))
);
	const featuredProduct = uniqueProducts.slice(0, 6);
	const renderList = featuredProduct.map((product)=>{
		return(
			<Product detail={product} key={product._id}/>
			)
	})
	
	const dispatch = useDispatch();

	useEffect(()=>{
		dispatch(getProducts(0,6,'','',''));
	},[])

	return(
			<>
				<section className="section featured">
			        <div className="title">
			          <span />
			          <h2 className='text-gray-600 text-center'>Featured Products</h2>
			          <span />
			        </div>
			        {
						(Object.keys(products).length === 0) ? 
						<Loading/> :
						<div className="section-center featured-center">
				          { renderList }
				        </div>
			        }
			        
			        <Link to="/products" className="btn hover:text-[rgb(134,56,14)] hover:bg-white"> all products </Link>
			    </section>
			</>
		)
}

export default FeaturedProducts;
