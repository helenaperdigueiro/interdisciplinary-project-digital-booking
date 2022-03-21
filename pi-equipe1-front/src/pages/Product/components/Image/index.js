import './style.css';
import { useParams } from 'react-router-dom';
import useAxios from '../../../../hooks/useAxios';
import { useState } from "react";
import { Modal } from "react-bootstrap"
import ImageGallery from 'react-image-gallery';
import { useMediaQuery } from 'react-responsive';

const Image = () => {
    const { productId } = useParams();
    const product = useAxios(`/product/${productId}`);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const mediaQuery = useMediaQuery({ maxWidth: 825 });

    const imageProduct = [
        {
            id: 1,
            original: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            thumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

        },
        {
            id: 2,
            original: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            thumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            id: 3,
            original: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            thumbnail: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            id: 4,
            original: "https://images.unsplash.com/photo-1498503403619-e39e4ff390fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            thumbnail: "https://images.unsplash.com/photo-1498503403619-e39e4ff390fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            id: 5,
            original: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            thumbnail: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        }
    ]

    return (
        <div>
            {mediaQuery ?

                <ImageGallery
                    items={product.images}
                    showThumbnails={false}
                    thumbnailPosition={"bottom"}
                    showPlayButton={false}
                    showFullscreenButton={false}
                    showIndex={true}
                    slideInterval={3000}
                />

                :

                <div id="galleryImage">
                    <div id="galleryThumbnail">
                        {
                            product.images?.map((productImage, index) => {
                                return (
                                    <div className={`thumbnailProduct${index + 1}`} key={index}>
                                        <img className="thumbnailImage" src={productImage.url} alt="" />
                                    </div>
                                )
                            })
                        }

                        <button className="modalButton" variant="primary" onClick={handleShow}>
                            Ver mais
                        </button>
                    </div>

                    <div id="galleryModal">
                        <Modal show={show} onHide={handleClose} size="lg" centered>

                            <Modal.Header bsPrefix="modal-header" closeButton></Modal.Header>
                            <Modal.Body bsPrefix="modal-body">

                                <ImageGallery
                                    items={product.images}
                                    showThumbnails={true}
                                    thumbnailPosition={"bottom"}
                                    showPlayButton={false}
                                    showFullscreenButton={true}
                                    showIndex={true}
                                />
                            </Modal.Body>

                        </Modal>
                    </div>
                </div>
            }
        </div>
    )

}

export default Image;