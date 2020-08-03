import React, { useEffect, useState, useCallback } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "../../components/Section";

const FaqModal = ({ isOpen, onClose }) => {
  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Contato</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Preencha o formulário abaixo para entrar em contato conosco!
        </p>
        <form className="mx-4">
          <input className="form-control" type="text" name="nome" placeholder="Nome" minlength="3" style="height: 44px;" />
          <input className="form-control" type="text" name="email" placeholder="E-mail" minlength="3" pattern="@" />
          <input className="form-control" type="text" name="phone" placeholder="Telefone" />
          <textarea className="form-control h-100" name="commenta" placeholder="Comentários" cols="2"></textarea>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn btn-dark" onClick={onClose}>
          Fechar
      </Button>
        <Button onClick={onClose}>
          Save Changes
      </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FaqModal;
