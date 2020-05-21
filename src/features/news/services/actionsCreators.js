export const types = {
  MOUNT_PAGE_REQUESTED: 'MOUNT_PAGE_REQUESTED',
  MOUNT_PAGE_SUCCEED: 'MOUNT_PAGE_SUCCEED',
  MOUNT_PAGE_FAILED: 'MOUNT_PAGE_FAILED',
  RELOAD: 'RELOAD',
  UNMOUNT_PAGE: 'UNMOUNT_PAGE'
};

export const actions = {
  mountPageRequested: (page) => {
    return {
      type: types.MOUNT_PAGE_REQUESTED,
      payload: {
        page
      }
    }
  },
  mountPageSucceed: (data) => {
    return {
      type: types.MOUNT_PAGE_SUCCEED,
      payload: {
        data
      }
    }
  },
  mountPageFailed: () => {
    return {
      type: types.MOUNT_PAGE_FAILED
    }
  },
  reload: (page) => {
    return {
      type: types.RELOAD,
      payload: {
        page
      }
    }
  },
  unmountPage: () => {
    return {
      type: types.UNMOUNT_PAGE
    }
  },
};
