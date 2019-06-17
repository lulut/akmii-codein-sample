const MODULE_COMMON = "akmii-yeeoffice-common";

export class CodeInApplication implements CodeInComp {
    execute(context: CodeInContext, fieldsValues: any) {
        const common = context.modules[MODULE_COMMON];
        const { AkModal } = common;
        AkModal.confirm({
            title: "Script sample",
            content: "Do you want to execute script?",
            onOk: () => {
                context.setFieldValue("field_2", !fieldsValues["field_2"]);
            }
        });
    }

    requiredFields() {
        return ["field_2"];
    }

    requiredModules() {
        return [];
    }
}