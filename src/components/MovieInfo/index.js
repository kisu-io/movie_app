import React, { useState } from "react";
import Thumb from "../Thumb";
import PropTypes from "prop-types";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import YouTube from "react-youtube";
import NoImage from "../../images/no_image.jpg";

import { Wrapper, Content, Text } from "./MovieInfo.styles";
import Button from "../Button";
import { Modal } from "react-bootstrap";

const MovieInfo = ({ movie }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const opts = {
    height: "720",
    width: "1100",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <Thumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
          alt="movie-thumb"
        />
        <Text>
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>

          <div className="rating-directors">
            <div>
              <h3>RATING</h3>
              <div className="score">{movie.vote_average}</div>
            </div>
            <div className="director">
              <h3>DIRECTOR{movie.directors.length > 1 ? "S" : ""}</h3>
              {movie.directors.map((director) => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </div>

            <Modal
              show={show}
              onHide={handleClose}
              size="xl"
              variant="dark"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              animation
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Trailer: {movie.title}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body style={{ textAlign: "center" }}>
                {movie.trailer[0] ? (
                  <YouTube videoId={movie.trailer[0].key} opts={opts} />
                ) : (
                  "Trailer not available!"
                )}
              </Modal.Body>
            </Modal>
          </div>
          <Button
            text="Trailer"
            style={{
              margin: "20px 0px",
              minWidth: "120px",
              width: "12%",
            }}
            callback={handleShow}
          />
        </Text>
      </Content>
    </Wrapper>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object,
};

export default MovieInfo;
