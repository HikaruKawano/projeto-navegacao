import { Container } from "./components/Container"
import { Nav } from "./components/Nav"
import { Li } from "./components/Nav/style"
import { Button } from "./components/buttonCreate"
import Card from "./components/card"
import Menu from "./components/menu"
import { Pagination } from "./components/pagination"
import Search from "./components/search"
import { Header } from "./style"


function App() {
  return (
    <>
      <Header>
      <Menu></Menu>
        <Search />
      </Header>
      <Nav> 
        <Li>Favoritos</Li>
        <Li>Receitas</Li>
      </Nav>
      <Nav mt="5%" justify="start">
        <Button></Button>
        <Pagination/>
      </Nav>
      <Container>
        <Card>Lorem Ipsum is simply dummy</Card>
        <Card>Lorem Ipsum is simply dummy</Card>
        <Card>Lorem Ipsum is simply dummy</Card>
        <Card>Lorem Ipsum is simply dummy</Card>
        <Card>Lorem Ipsum is simply dummy</Card>
        <Card>Lorem Ipsum is simply dummy</Card>
        <Card>Lorem Ipsum is simply dummy</Card>
        <Card>Lorem Ipsum is simply dummy</Card>
        <Card>Lorem Ipsum is simply dummy</Card>
      </Container>
    </>
  )
}

export default App
