import React from 'react';
import PropTypes from 'prop-types';
import { ImageUpload } from '../';

const styleBG = {
  backgroundImage: `url(${require('../../images/404Bg.png')})`,
  backgroundSize: 'cover',
  backgroundPosition: '30% 35%'
};

const EditRepo = ({ handleChange, repositories, isDisabled }) => {
  let counter = 0
  return repositories.map(repo => {
    const { _id, name, imageUrl, description, deployedUrl } = repo;
    return (
      <fieldset key={_id} className='card'>
        <div
          className="card-header py-0"
          id="headingOne"
          style={styleBG}
      >
          <button
            className="btn btn-link h3 mb-0"
            style={{ color: '#fff', fontSize: '1.35rem', fontFamily: 'Roboto' }}
            type="button"
            data-toggle="collapse"
            data-target={`#collapse${_id}`}
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Pinned Repository #{++counter}
          </button>
        </div>
        <div
          id={`collapse${_id}`}
          className={counter === 1 ? "collapse show" : "collapse"}
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div className="card-body py-2 bg-light">

          {/* Image component */}
          <ImageUpload
            _id={_id}
            src={imageUrl || require('../../images/placeholder.png')}
          />

            {/* Repo name template */}
            <div className="form-group mb-3 row">
              <label
                className='col-sm-3 col-form-label text-left pb-1 pt-0 my-auto'
              >
                Repository Name:
              </label>
              <div className='col-sm-9'>
                <input
                  name='name'
                  type="text"
                  value={name || ''}
                  onChange={e => handleChange(e, _id)}
                  className='form-control'
                />
              </div>
            </div>
            {/* Deployed Website template */}
            <div className="form-group mb-3 row">
              <label
                className='col-sm-3 col-form-label text-left pb-1 pt-0 my-auto'
              >
                Deployed Site:
            </label>
              <div className='col-sm-9'>
                <input
                  name='deployedUrl'
                  type="text"
                  value={deployedUrl || ''}
                  onChange={e => handleChange(e, _id)}
                  className='form-control'
                />
              </div>
            </div>
            {/* Description template */}
            <div className="form-group mb-3 row">
              <label
                className='col-sm-3 col-form-label text-left pb-1 pt-0 my-auto'
              >
                Description:
            </label>
              <div className='col-sm-9'>
                <textarea
                  name='description'
                  type="text"
                  value={description || ''}
                  onChange={e => handleChange(e, _id)}
                  className='form-control'
                  rows='2'
                />
              </div>
            </div>
            <button type='submit' className='btn btn-outline-dark' disabled={isDisabled}>
              {
                isDisabled
                ?
                'Saved!'
                :
                'Save Changes'
              }
            </button>
          </div>
        </div>
      </fieldset>
    );
  })
};

EditRepo.propTypes = {
  handleChange: PropTypes.func.isRequired,
  repositories: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default EditRepo;
