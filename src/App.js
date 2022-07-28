import './App.css';
import  FunctionComponent  from './FunctionComponent';
import {ClassComponent} from './ClassComponent';
import Wellcome from './RenderClass';
import Hello from './UsingJsx';
import HelloApp from './WithoutUsingJsx';
import PROPS from './PropsFunction';
import PropsClass from './PropsClass'
import StateClass from './StateInClass'
import SetStateClass from './SetStateClass';
import EventHandlingFunc from './EventHandlingFunc';
import EventHandlingClass from './EventHandlingClass';
import BindingEventClass from './BindingEventClass';
import MethodsAsProps from './MethodsAsProps';
import ConditionalRendering from './ConditionalRendering';
import ListRenderingFunc from './ListRenderingFunc';
import FormHandlingClass from './FormHandlingClass';
import LifecycleMethodsA from './LifecycleMethodsA';
import PureComponents from './PureComponents';
import ReqComponent from './ReqComponent';
import ParentComponent from './ParentComponent';
import RefsClass from './RefsClass';
import FocusRefclass from './FocusRefclass';
import ForwardingRefsFunc from './ForwardingRefsFunc';
import ForwardingRefsClass from './ForwardingRefsClass';
import RenderProps1 from './RenderProps1';
import RenderProps2 from './RenderProps2';
import RenderProps3 from './RenderProps3';
import RenderProps3part2 from './RenderProps3part2';
import ContextC from './ContextC';
import { UserProvider } from './UserContext';

function App() {
  return (
    <div className="App">
    {/* <FunctionComponent/>
    <ClassComponent/>
    <Wellcome/> 
    <Hello/>  
    <HelloApp/>
    <PROPS name='salim' lastname='sheene'/>
    <PROPS name='sheene' lastname='salim'/>
    <PropsClass name='salim' lastname='sheene'/>
    <PropsClass name='sheene' lastname='salim'/>
    <StateClass/>
    <SetStateClass/>
    <EventHandlingFunc/>
    <EventHandlingClass/>
    <BindingEventClass/> */}
    {/* <MethodsAsProps/> */}
    {/* <ConditionalRendering/> */}
    {/* <ListRenderingFunc/> */}
    {/* <FormHandlingClass/> */}
    {/* <LifecycleMethodsA/> */}
    {/* <PureComponents/>
    <ReqComponent/> */}
    {/* <ParentComponent/> */}
    {/* <RefsClass/> */}
    {/* <FocusRefclass/> */}
    {/* <ForwardingRefsClass/> */}
    {/* <RenderProps1/> */}
    {/* <RenderProps2/> */}
    {/* <RenderProps3 name={(IsLoged)=> IsLoged? 'salm':'gust'}/> */}
    {/* <RenderProps3 render={(IsLoged)=> IsLoged? 'salm':'gust'}/> */}
{/* <RenderProps3part2 render={(count,handlerclick)=> <RenderProps1 count={count} handlerclick={handlerclick}></RenderProps1>}/>
<RenderProps3part2 render={(count,handlerclick)=> <RenderProps2 count={count} handlerclick={handlerclick}></RenderProps2>}/> */}
 
  
  {/* <UserProvider value="salim">
  <ContextC/>
  </UserProvider> */}
    </div>

  );
}

export default App;
