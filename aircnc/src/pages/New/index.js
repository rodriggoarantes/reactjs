import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import { FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';

import api from '~/services/api';

import camera from '~/assets/camera.svg';

import { useAuthentication } from '~/components/AuthProvider';
import { Form, Label, Input } from '~/components/Form';

import { FileContainer, File, Camera, SubmitButton } from './styles';

function New({ history }) {
  const auth = useAuthentication();

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [techs, setTechs] = useState('');
  const [price, setPrice] = useState('');
  const [thumbnail, setThumbnail] = useState(null);

  const thumbnailPreview = useMemo(() => {
    return (thumbnail && URL.createObjectURL(thumbnail)) || null;
  }, [thumbnail]);

  const handleSubmit = async event => {
    event.preventDefault();

    setLoading(true);

    const data = new FormData();
    data.append('thumbnail', thumbnail);
    data.append('name', name);
    data.append('company', company);
    data.append('techs', techs);
    data.append('price', price);

    try {
      await api.post('/spots', data, {
        headers: { user_id: auth.user.id },
      });

      toast.success(`Local ${name} cadastrado com sucesso!`);
      history.push('/dashboard');
    } catch (error) {
      if (error.response) {
        const mensagem = error.response.data.error;
        toast.error(`Falha ao registrar o local : ${mensagem}!`);
      } else if (error.request) {
        toast.error(`Falha ao registrar o local : ${error.request}!`);
      } else {
        toast.error(`Falha ao registrar o local ${name}!`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FileContainer
          id="thumbnail"
          htmlFor="thumbail"
          background={thumbnailPreview}
        >
          <File
            name="thumbail"
            id="thumbail"
            onChange={event => setThumbnail(event.target.files[0])}
          />
          <Camera src={camera} alt="Select spot img" />
        </FileContainer>

        <Label htmlFor="name">Nome do local *</Label>
        <Input
          id="name"
          type="text"
          placeholder="Nome legal do seu local"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Label htmlFor="company">Empresa *</Label>
        <Input
          id="company"
          type="text"
          placeholder="Seu empresa incrível"
          value={company}
          onChange={e => setCompany(e.target.value)}
        />

        <Label htmlFor="techs">
          Tecnologias * <span>(separadas por virgula)</span>
        </Label>
        <Input
          id="techs"
          type="text"
          placeholder="Quais tecnologias usam?"
          value={techs}
          onChange={e => setTechs(e.target.value)}
        />

        <Label htmlFor="price">Valor cobrado por dia *</Label>
        <Input
          id="price"
          type="number"
          placeholder="Valor cobrado por dia"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />

        <SubmitButton loading={loading ? 1 : 0}>
          {loading ? (
            <>
              <FaSpinner color="white" size={14} />
              <span>&nbsp;Salvando ...</span>
            </>
          ) : (
            'Cadastrar'
          )}
        </SubmitButton>
      </Form>
    </>
  );
}

New.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default New;
