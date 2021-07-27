import {Container,Base,Input,Submit,Title,Error} from './styles/form'

const Form=({children,...restProps})=>{
        return <Container {...restProps}>{children}</Container> 
}

Form.Base=function FormBase({children,...restProps}){
    return <Base {...restProps}>{children}</Base> 
}

Form.Input=function FormInput({children,...restProps}){
    return <Input {...restProps}>{children}</Input> 
}

Form.Error=function FormError({children,...restProps}){
    return <Error {...restProps}>{children}</Error> 
}

Form.Submit=function FormSubmit({children,...restProps}){
    return <Submit {...restProps}>{children}</Submit> 
}

Form.Title=function FormTitle({children,...restProps}){
    return <Title {...restProps}>{children}</Title> 
}

export default Form;

