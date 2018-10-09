import React from "react"
import 'prismjs/themes/prism.css';
import '../global-styles';
import userConfig from '../../config';
import Header from "./Header";
export default ({ children }) => (
  <div>
    <Header config={userConfig}/>
    {children}
  </div>
)