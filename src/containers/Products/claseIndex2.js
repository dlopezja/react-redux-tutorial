function classTriggerAction({ProductComponent}){

    function triggerAction({ getProducts }) {

        useEffect(() => {
          getProducts();
        }, [getProducts]);
      
        return (
          null
        );
      }

    function mapDispatchToProps(dispatch) {
        function getProducts() {
          dispatch(ProductActions.FETCH_PRODUCTS());
        }
      
        return { getProducts }
      }
}
export default connect(null, mapDispatchToProps)(classTriggerAction);

