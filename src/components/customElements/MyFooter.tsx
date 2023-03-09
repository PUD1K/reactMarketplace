import React from "react"

const MyFooter = (): JSX.Element => 
<footer className="page-footer font-small pt-4 bg-primary text-white">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-12 mt-md-0 mt-3">
                <h5 className="text-uppercase">LZONE</h5>
                <p>Лучший маркетплейс на территории РФ</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2023 Copyright: 
        <div>
            <a href="https://vk.com/ppupupu" className="text-white">Bnliana.com</a>
        </div>
    </div>

</footer>

export default MyFooter