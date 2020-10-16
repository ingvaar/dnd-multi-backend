import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { DndProvider as ReactDndProvider } from 'react-dnd';
import MultiBackend from 'dnd-multi-backend';

export const PreviewPortalContext = React.createContext(null);

export const DndProvider = (props) => {
  const managedPreviewPortal = useRef();
  const userPreviewPortal = props.previewPortalRef !== undefined;
  const previewPortal = userPreviewPortal ? props.previewPortalRef.current : managedPreviewPortal.current;
  console.log(userPreviewPortal, managedPreviewPortal, props.previewPortalRef, previewPortal); // eslint-disable-line no-console

  return (
    <PreviewPortalContext.Provider value={previewPortal}>
      <ReactDndProvider backend={MultiBackend} {...props} />
      {userPreviewPortal ? null : <div ref={managedPreviewPortal} />}
    </PreviewPortalContext.Provider>
  );
};

DndProvider.propTypes = {
  manager: PropTypes.any,
  context: PropTypes.any,
  options: PropTypes.any,
  previewPortalRef: PropTypes.any,
  debugMode: PropTypes.bool,
};
