import Form from "vform";

export default {
  methods: {
    initForm() {
      this.form = new Form({
        title: 'Fomulário',
        description: null,
        visibility: 'public',
        workspace_id: this.workspace?.id,
        properties: [],

        notifies: false,
        slack_notifies: false,
        send_submission_confirmation: false,
        webhook_url: null,

        // Customization
        theme: 'default',
        width: 'centered',
        dark_mode: 'auto',
        color: '#9D00FF',
        hide_title: false,
        no_branding: false,
        uppercase_labels: true,
        transparent_background: false,
        closes_at: null,
        closed_text: 'Aparentemente, o formulário não esta a aceitar mais submissões',

        // Submission
        submit_button_text: 'Submeter',
        re_fillable: false,
        re_fill_button_text: 'Preencher Novamente',
        submitted_text: 'Todas as respostas guardadas',
        notification_sender: 'Estimate',
        notification_subject: 'Guardamos as suas respostas',
        notification_body: 'Confirmação que a sua submissão foi registada',
        notifications_include_submission: true,
        use_captcha: false,
        is_rating: false,
        rating_max_value: 5,
        max_submissions_count: null,
        max_submissions_reached_text: 'Número máximo de submissões atingido',

        // Security & Privacy
        can_be_indexed: true
      })
    },
  }
}
