import React, {Component} from 'react';
import {AvForm, AvField} from 'availity-reactstrap-validation'
import axios from "axios";
import {Modal, ModalBody} from "reactstrap";

class Employee extends Component {
    state = {
        employees: [],
        openModal: false,
        selectIndex: -1
    };

    componentDidMount() {
        axios.get('https://nimadir.herokuapp.com/api/employee')
            .then((res) => {
                this.setState({
                    employees: res.data.object
                });
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    addEmployee = (event, value) => {
        axios.post('https://nimadir.herokuapp.com/api/employee', value)
            .then((res) => {
                if (res.data.success) {
                    axios.get('https://nimadir.herokuapp.com/api/employee')
                        .then((res2) => {
                            this.setState({
                                employees: res2.data.object
                            })
                        });
                    this.form.reset();
                }
            })
    };

    deleteEmployee = (id) => {
        axios.delete('https://nimadir.herokuapp.com/api/employee/' + id)
            .then((res) => {
                axios.get('https://nimadir.herokuapp.com/api/employee')
                    .then((res2) => {
                        this.setState({
                            employees: res2.data.object
                        })
                    })
            })
    };

    changeModal = () => {
        this.setState({
            openModal: !this.state.openModal
        })
    };

    editEmployee=(event,value)=>{
        axios.put('https://nimadir.herokuapp.com/api/employee/'+this.state.employees[this.state.selectIndex].id,value)
            .then((res)=>{
               axios.get('https://nimadir.herokuapp.com/api/employee')
                   .then((res2)=>{
                       this.setState({
                           employees:res2.data.object
                       });
                       this.changeModal()
                   })
            })
    };

    render() {
        const {employees, openModal, selectIndex} = this.state;
        return (
            <div>
                <div className="container">
                    <div className="row my-3">
                        <div className="col-md-5 offset-4">
                            <div className="card">
                                <div className="card-header text-center">
                                    <h4>Add Employee</h4>
                                </div>
                                <div className="card-body">
                                    <AvForm ref={(c) => this.form = c} onValidSubmit={this.addEmployee}>
                                        <AvField
                                            type="text"
                                            label="Ismingizni kiritng"
                                            name="firstName"
                                            required
                                        />
                                        <AvField
                                            type="text"
                                            label="Familiyangizni kiritng"
                                            name="lastName"
                                            required
                                        />
                                        <AvField
                                            type="number"
                                            label="Yoshingizni kiritng"
                                            name="age"
                                            required
                                        />
                                        <AvField
                                            type="text"
                                            label="Maoshingizni kiritng"
                                            name="salary"
                                            required
                                        />
                                        <AvField
                                            type="select"
                                            label="Lavozimingizni kiritng"
                                            name="position"
                                        >
                                            <option value="Director">Director</option>
                                            <option value="Developer">Developer</option>
                                            <option value="Manager">Manager</option>
                                        </AvField>

                                        <button type={'submit'} className="btn btn-info btn-block">Add</button>


                                    </AvForm>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {employees.map((item, index) => (
                            <div className="col-md-4" key={item.id}>
                                <div className="card my-2">
                                    <div className="card-header text-center">
                                        <h4>{item.firstName} {item.lastName}</h4>
                                    </div>
                                    <div className="card-body">
                                        <h5>Age: {item.age}</h5>
                                        <h5>Salary: {item.salary}</h5>
                                        <h5>Position: {item.position}</h5>
                                    </div>
                                    <div className="card-footer d-flex justify-content-between">
                                        <button type='button' className='btn btn-warning w-50'
                                                onClick={() => {
                                                    this.setState({selectIndex: index});
                                                    this.changeModal()
                                                }}
                                        >Edit
                                        </button>
                                        <button type='button' className='btn btn-danger w-50 ml-2'
                                                onClick={() => this.deleteEmployee(item.id)}
                                        >Delete
                                        </button>
                                    </div>

                                </div>
                            </div>

                        ))}
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Modal isOpen={openModal} toggle={this.changeModal}>
                                <ModalBody>
                                    <AvForm onValidSubmit={this.editEmployee} model={employees[selectIndex]}>
                                        <AvField
                                            type="text"
                                            label="Ismingizni kiritng"
                                            name="firstName"
                                            required
                                        />
                                        <AvField
                                            type="text"
                                            label="Familiyangizni kiritng"
                                            name="lastName"
                                            required
                                        />
                                        <AvField
                                            type="number"
                                            label="Yoshingizni kiritng"
                                            name="age"
                                            required
                                        />
                                        <AvField
                                            type="text"
                                            label="Maoshingizni kiritng"
                                            name="salary"
                                            required
                                        />
                                        <AvField
                                            type="select"
                                            label="Lavozimingizni kiritng"
                                            name="position"
                                        >
                                            <option value="Director">Director</option>
                                            <option value="Developer">Developer</option>
                                            <option value="Manager">Manager</option>
                                        </AvField>

                                        <button type='submit' className="btn btn-warning">Edit</button>
                                        <button onClick={this.changeModal} type='button'
                                                className="btn btn-info">Cancel
                                        </button>

                                    </AvForm>
                                </ModalBody>
                            </Modal>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Employee;