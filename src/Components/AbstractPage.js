import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import { Container, Row, Col} from 'react-bootstrap';
import ElementsList from './ElementsListComponents/ElementsList'
import Modal from './modal/src';
import Filter from './Filter'
import DataManager from '../DataManager'
import akpsi_logo from '../akpsi_logo.svg';
import { Combobox } from 'react-widgets'

import 'react-widgets/dist/css/react-widgets.css';



class AbstractPage extends React.Component{
    constructor(props){
        super(props)
        this.type = props.type
        this.state = {
            modalVisible: false,
            data: [],
            filteredData: [],
            password : null,
            loadStatus: "loaded",
            filterStatus : props.filterStatus,
            filters: props.filters 
        }
        this.updateFilter = this.updateFilter.bind(this)
        this.filterData = this.filterData.bind(this)
        this.loadData("not implemented yet", null)
    }

    loadData(){
        this.setState({
            loadStatus : "loading"
        });
        DataManager.getData(this.type, this.state.password).then(response => {
            if (response["error"]){
                console.log(response["error_statement"])
                this.openModal()
                this.setState({
                    loadStatus : "loaded"
                });
            }else {
                this.setState({
                    data : response,
                    loadStatus : "loaded"
                });
                this.filterData()
            }
        }
        )
    }

    openModal() {
        this.setState({
            modalVisible : true
        });
    }

    closeModal(submit) {
        this.setState({
            modalVisible : false,
        });
        if (submit){
            this.loadData()
        }
        
    }

    handleChange(event) {
        this.setState({password: event.target.value})
    }

    filterData(){
        var new_filtered_data = []
        this.state.data.forEach(element => {
            var matched = true
            this.state.filters.forEach(key => {
                try{
                    if (this.state.filterStatus[key] != "All" && !element[key].toLowerCase().includes(this.state.filterStatus[key].toLowerCase())){
                        matched = false
                    }
                }catch {
                    matched = false
                }
            });
            if (matched) {
                new_filtered_data.push(element)
            }
        });

        this.setState({filteredData: new_filtered_data})
    }

    updateFilter(filter, value){
        var tmp = this.state.filterStatus
        tmp[filter] = value
        this.setState({filterStatus: tmp})
        this.filterData()
    }

    renderModal(){
        return (
            <Modal visible={this.state.modalVisible} width="350" height="200" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                <div>
                    <h1 style={{color:'black'}}>Enter Password</h1>
                    <input style={{marginTop: "50px", width: "60%"}} type="text" value={this.state.password} onChange={this.handleChange.bind(this)}/><br></br>
                    <div style={{marginTop: "20px"}}>
                        <a style={{marginRight: "100px"}} href="javascript:void(0);" onClick={() => this.closeModal(false)}>Close</a>
                        <a href="javascript:void(0);" onClick={() => this.closeModal(true)}>Submit</a>
                    </div>
                </div>
            </Modal>
        )
    }


    render() {
        if (this.state.data.length == 0){
            return (
                <Container fluid className="App">
                    <Row>
                        <Col sm={12}>
                        <img src={akpsi_logo} className="App-logo" alt="logo" />
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <p style={{textAlign: "center"}}> {this.state.loadStatus}</p>
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <a href="javascript:void(0);" onClick={() => this.loadData()}>Reload Data</a>
                        </Col>
                    </Row>
                    
                    
                    {this.renderModal()}
                </Container>  
                
            )
        }else {
            return (
                <Container fluid className="App">
                    {this.renderModal()}
                    <Filter data={this.state.data} filters={this.state.filters} change={this.updateFilter} filter={this.filterData}></Filter>
                    <ElementsList elementType={this.type} data={this.state.filteredData}/>
                </Container>
            )
        }
        
    }
    
}



export default AbstractPage