import React, { Component } from 'react';
// import DISHES from '../../data/dishes';
// import COMMENTS from '../../data/comments';
import MenuItem from './MenuItem';
import DishDetail from './DishDetail';
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { addComment } from '../../Redux/actionCreators';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addComment: (dishId, author, rating, comment) => dispatch(addComment(dishId, author, rating, comment))
    }
}

class Menu extends Component {
    state = {
        // dishes: DISHES,
        // comments: COMMENTS,
        selectDish: null,
        modalOpen: false,
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    onDishSelect = dish => {
        this.setState({
            selectDish: dish
        })
        this.toggleModal();
    }

    render() {
        document.title = "Menu";
        const menu = this.props.dishes.map(item => {
            return (
                <MenuItem dish={item}
                    key={item.id}
                    onDishSelect={() => this.onDishSelect(item)}
                />
            )
        })

        let dishDetail = null;
        if (this.state.selectDish != null) {
            const comments = this.props.comments.filter(comment => {
                return comment.dishId === this.state.selectDish.id;
            })
            dishDetail = <DishDetail
                dish={this.state.selectDish}
                comments={comments}
                addComment={this.props.addComment} />
        }
        return (
            <div className="container">
                <div className="row">
                    <CardColumns>
                        {menu}
                    </CardColumns>
                    <Modal isOpen={this.state.modalOpen}>
                        <ModalBody>
                            {dishDetail}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={this.toggleModal} >Close</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);


// <div className="col-6">
//                         {menu}
//                     </div>
//                     <div className="col-6">
//                         {dishDetail}

//                     </div>

