import { ClipLoader } from 'react-spinners'

const override = {
  display: 'block',
  margin: '80px auto',
}

const Spinner = ({ loading }) => {
  return (
    <div role="status" className="flex flex-col items-center justify-center">
      <ClipLoader
        color="#4338ca"
        loading={loading}
        cssOverride={override}
        size={70}
        aria-label="Loading Spinner"
      />
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default Spinner