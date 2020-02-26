import React from 'react';
import toast from 'toasted-notes';
import 'toasted-notes/src/styles.css';

const styles = {
  backgroundColor: '#7227b0',
  color: 'white',
  padding: '1rem 2rem',
  borderRadius: '5px'
};

export default (tst = 'An Error Occured') => {
  toast.notify(
    ({ onClose }) => (
      <div style={styles} onClick={onClose}>
        {tst}
      </div>
    ),
    { position: 'top-right' }
  );
};
