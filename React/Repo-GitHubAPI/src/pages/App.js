import { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';

import { Container } from './styles';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);


  const handleSearchRepo = async () => {

    const {data} = await api.get(`repos/${currentRepo}`)

    if(data.id){

      const isExist = repos.find(repo => repo.id === data.id);

      if(!isExist){
        setRepos(prev => [...prev, data]);
        setCurrentRepo('')
        return
      }

    }
    alert('Repositório não encontrado')

  }

  const handleRemoveRepo = (id) => {
    console.log('Removendo registro', id);

    // utilizar filter.
  }


  return (
    <Container>
      <img src="https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Github-512.png" width={72} height={72} alt="github logo"/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </Container>
  );
}

export default App;
