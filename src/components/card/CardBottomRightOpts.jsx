function CardBottomRightOpts() {
  return (
    <div className="position-absolute right-[0.6rem] bottom-[0.6rem]"
    style={{right: '0.6rem', bottom: ['0.6rem']}}
    >
      <div className="d-flex gap-2">

          <div className="m-0 py-2 px-4 rounded h6"
          style={{background: 'var(--mainColor)', color: '#ffffff'}}
          >
            Migrate
          </div>

          <div className="m-0 py-2 px-4 rounded h6"
          style={{background: 'var(--mainColor)', color: '#ffffff'}}
          >
            Submission
          </div>

          <div className="m-0 py-2 px-4 rounded h6"
          style={{background: 'var(--mainColor)', color: '#ffffff'}}
          >
            Publish Options
          </div>
      </div>
    </div>
  );
}

export default CardBottomRightOpts;
