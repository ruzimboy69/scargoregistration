import React, {Component} from 'react';
import AdminLayout from "../pages/AdminLayout";
import {Button,Modal, ModalBody, ModalHeader,table} from "reactstrap";
import {AvForm,AvField} from "availity-reactstrap-validation";
import {connect} from "react-redux";
import {updateState,setMenus,getMenus} from "../redux/action/adminMenusAction";

class Menus extends Component {

    componentDidMount() {
        this.props.getMenus();
    }

    url=(text)=>text.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
    changeModal=()=>{
        this.props.updateState({
            openModal:!this.props.openModal
        })
    };
    getGeneralUrl=(e)=>{
        this.props.updateState({
            generateUrl:this.url(e.target.value)
        })
        console.log(this.)
    };
    addMenus=(event,values)=>{
        this.props.setMenus(values)
    }
    render() {

        return (
            <AdminLayout>
                <div>
                    <div className={'d-flex justify-content-between'}>

                        <h4>Menus Component</h4>
                        <div>
                            <Button onClick={this.changeModal} color={'success'}>Add</Button>
                        </div>
                    </div>
                    <div className={'container'}>
                        <div className={"row-mt-3"}>
                            <div className={'col-md-12'}>
                                <Modal isOpen={this.props.openModal} toggle={this.changeModal}>
                                    <ModalHeader>
                                        <h4>Add menus</h4>
                                    </ModalHeader>
                                    <ModalBody>
                                        <AvForm onValidSubmit={this.addMenus}>
                                            <AvField
                                            name={'nameUz'}
                                            type={'text'}
                                            label={"NameUz"}
                                            onChange={this.getGeneralUrl}
                                            required
                                            />
                                            <AvField
                                                name={'nameRu'}
                                                type={'text'}
                                                label={"NameRu"}
                                                required
                                            />
                                            <AvField
                                                name={'nameEn'}
                                                type={'text'}
                                                label={"NameEn"}
                                                required
                                            />
                                            <AvField
                                                value={this.props.openSubMenu}
                                                onChange={()=>this.props.updateState({
                                                    openSubMenu: !this.props.openSubMenu
                                                })}
                                                name={'submenu'}
                                                type={'checkbox'}
                                                label={"this is submenu"}
                                                required
                                            />
                                            {this.props.openSubMenu ?
                                            <>
                                                <AvField
                                                    name={'parentId'}
                                                    type={'select'}
                                                    label={"parentmenu"}
                                                    required
                                                >
                                                    <option value={"1"}> Jamiyat haqida</option>
                                                    <option value={'2'}>Struktura</option>
                                                    <option value={'3'}>Yangiliklar</option>
                                                </AvField>
                                                <AvField
                                                    value={this.props.generateUrl}
                                                    name={'url'}
                                                    type={'text'}
                                                    label={"url"}
                                                    required
                                                />
                                            </>
                                                :
                                                " "

                                            }
                                            <Button  type={'submit'} className={'float-right'} color={'success'}>Add</Button>
                                            <Button type={'submit'}  className={'float-right'} onClick={this.changeModal} color={'secondary'}>Close</Button>

                                        </AvForm>
                                    </ModalBody>
                                </Modal>
                            </div>
                        </div>
                    </div>
                    <div className={'container'}>
                        <div className={'row my-5'}>
                            <div className={'col-md-12'}>
                                <table className={'table table-dark table-hover'}>
                                    <thead>
                                    <tr>
                                        <th>N</th>
                                        <th>Name uz</th>
                                        <th>Name ru</th>
                                        <th>Name eng</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.props.mapMenu.map((item,index)=>(
                                            <tr key={index}>
                                                <td>{index+1}</td>
                                                <td>{item.nameUz}</td>
                                                <td>{item.nameRu}</td>
                                                <td>{item.nameEn}</td>
                                                <td/>
                                                <td>
                                                    <button type={'button'} className={'btn btn-success'}>Edit</button>
                                                    <button type={'button'} className={'btn btn-danger'}>Delete</button>

                                                </td>
                                            </tr>
                                        ))
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </AdminLayout>
        );
    }
}
function getState (state) {
   return {
       openModal:state.menu.openModal,
       openSubMenu: state.menu.openSubMenu,
       generateUrl: state.menu.generateUrl,
       mapMenu:state.menu.menus
   }
};

export default connect(getState,{updateState,setMenus,getMenus}) (Menus);