import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import { Container, Row, Col} from 'react-bootstrap';
import ElementsList from './ElementsListComponents/ElementsList'
import Modal from './modal/src';
import Filter from './Filter'
import DataManager from '../DataManager'
import akpsi_logo from '../akpsi_logo.svg';

import { Redirect } from "react-router-dom";
import Canvas from './Canvas'

import 'react-widgets/dist/css/react-widgets.css';

class AbstractPage extends React.Component{
    constructor(props){
        super(props)
        this.type = props.type
        this.state = {
            data: [],
            filteredData: [],
            loadStatus: "loaded",
            filterStatus : props.filterStatus,
            filters: props.filters,
            width: 0,
            height: 0, 
            redirect : null
        }
        this.updateFilter = this.updateFilter.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.filterData = this.filterData.bind(this);
        this.loadData("not implemented yet", "");
    }

    loadData(){
        this.setState({
            loadStatus : "loading"
        });
        DataManager.getData(this.type).then(response => {
            if (response["error"]){
                this.setState({ redirect: "/" });
            }else {
                this.setState({
                    data : response["data"],
                });
                this.filterData()
            }
        }
        )
    }


    handleChange(event) {
        this.setState({password: event.target.value})
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
      
    updateWindowDimensions() {
        let heightVal = Math.max(window.innerHeight, 800)
        this.setState({ width: window.innerWidth, height: heightVal });
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

        this.setState({filteredData: this.sortByTime(new_filtered_data)})
    }

    sortByTime(array){
        array.sort(function(x, y) {
            x = new Date(x);
            y = new Date(y);
            if (x > y) {
              return -1;
            }
            if (x < y) {
              return 1;
            }
            return 0;
          });

        return array;
    }

    updateFilter(filter, value){
        var tmp = this.state.filterStatus
        tmp[filter] = value
        this.setState({filterStatus: tmp})
        this.filterData()
    }

    


    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
          }
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
                    
                
                    
                </Container>  
               
            )
        } else {
            return (
                <div style={{maxHeight:this.state.height, maxWidth:this.state.width}}>
                    <Container fluid className="App">
                    <Canvas></Canvas>
                        <div style={{paddingTop: "0px"}}>
                            <Filter data={this.state.data} filters={this.state.filters} change={this.updateFilter} filter={this.filterData}></Filter>
                            <ElementsList elementType={this.type} data={this.state.filteredData} height={this.state.height} width={this.state.width}/>
                        </div>
                    </Container>
                </div>
            )
        }
        
    }
    
}



export default AbstractPage