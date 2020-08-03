import React from "react";
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { register_store_url } from "../../config";

const RegisterStore = ({ className, children, ...props }) => {
  return (
    <a
      { ...props }
      className={classNames("btn btn-secondary d-flex align-items-center justify-content-center wobble animated", className)}
      href={register_store_url}
      target="blank"
    >
      { children }
    </a>
  );
};

RegisterStore.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
}

RegisterStore.defaultProps = {
  className: '',
  children: 'Cadastrar minha loja',
}

export default RegisterStore;
