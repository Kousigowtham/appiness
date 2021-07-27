import { Container,Base,Row,Head,NonHead } from './styles/table'
const Table=({children,...restProps})=>{
    return <Container {...restProps} >{children}</Container>
}

Table.Base=function TableBase({children,...restProps}){
    return <Base {...restProps}>{children}</Base>
}

Table.Row=function TableRow({children,...restProps}){
    return <Row {...restProps}>{children}</Row>
}

Table.Head=function TableHead({children,...restProps}){
    return <Head {...restProps}>{children}</Head>
}

Table.NonHead=function TableNonHead({children,...restProps}){
    return <NonHead {...restProps}>{children}</NonHead>
}

export default Table;