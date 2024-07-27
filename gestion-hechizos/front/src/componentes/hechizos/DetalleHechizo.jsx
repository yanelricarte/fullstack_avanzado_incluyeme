import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const DetalleHechizo = () => {
  const { id } = useParams();
  const [hechizo, setHechizo] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHechizo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/hechizos/${id}`
        );
        setHechizo(response.data);
      } catch (error) {
        console.error("Error al obtener hechizo:", error);
      }
    };

    fetchHechizo();
  }, [id]);

  return (
    <div className="detalle-hechizo">
      <h2> {hechizo.nombre} </h2>
      <div className="hechizos-info">
        <h4> Descripción:</h4>
        <p> {hechizo.descripcion} </p>
        <h4> Nivel:</h4>
        <p> {hechizo.nivel} </p>
      </div>
    </div>
  );
};

export default DetalleHechizo;
