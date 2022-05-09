import React from 'react';
import Dishdetail from './DishdetailComponent';

import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderMenuItem({ dish , onClick }) {

    return (

        <Card onClick={ () => onClick(dish.id) } >

            <CardImg width="100%" src={dish.image} alt={dish.name} />

            <CardImgOverlay>

                <CardTitle>{dish.name}</CardTitle>

            </CardImgOverlay>

        </Card>

    );

}



function renderDish(dish) {

    if (dish != null)

        return (

            // <Card>

            //     <CardImg top src={dish.image} alt={dish.name} />

            //     <CardBody>

            //         <CardTitle>{dish.name}</CardTitle>

            //         <CardText>{dish.description}</CardText>

            //     </CardBody>

            // </Card>
            <Dishdetail dishes={dish} name="hi"/>
            // เรียกใช้ dishdetail component แทน

        );

    else

        return (

            <div></div>

        );

}



const Menu = (props) => {



    const menu = props.dishes.map((dish) => {

        return (

            <div className="col-12 col-md-5 m-1" key={dish.id}>

                <RenderMenuItem dish={dish} onClick={props.onClick} />

            </div>

        );

    });



    return (

        <div className="container">

            <div className="row">

                {menu}

            </div>

            {  renderDish(props.dishes[props.selectedDish]) }

            

        </div>

    );

}



export default Menu; 