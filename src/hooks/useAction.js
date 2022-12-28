function useAction({ onDelete }) {
  function handleDelete(...args) {
    onDelete(...args);
  }

  return {
    handleDelete,
  };
}

export default useAction;
